import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const USERNAME = "Jay3103-suthar";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

const GithubRepos = () => {
  const { theme } = useTheme();
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ color: theme.muted }}>Loading repositories…</p>;
  }

  if (error) {
    return (
      <p style={{ color: theme.muted }}>
        GitHub API limit reached. Try again later.
      </p>
    );
  }

  return (
    <section>
      <h2 style={{ marginBottom: "16px" }}>GitHub Repositories</h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "16px",
        }}
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={cardAnim}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            style={{
              background: theme.card,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3 style={{ fontSize: "15px", marginBottom: "6px" }}>
                {repo.name}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: theme.muted,
                  marginBottom: "12px",
                }}
              >
                {repo.description || "No description"}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "13px",
              }}
            >
              {repo.language && (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: theme.muted,
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      background: theme.accent,
                    }}
                  />
                  {repo.language}
                </span>
              )}

              <div style={{ display: "flex", gap: "12px" }}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: theme.accent }}
                >
                  GitHub
                </a>

                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: theme.accent }}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GithubRepos;
