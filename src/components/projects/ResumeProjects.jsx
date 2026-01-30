import { motion } from "framer-motion";
import { resumeProjects } from "../../data/resumeProjects";
import { useTheme } from "../../theme/ThemeContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const ResumeProjects = () => {
  const { theme } = useTheme();

  return (
    <section>
      <h2 style={{ marginBottom: "16px" }}>Projects</h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {resumeProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemAnim}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            style={{
              background: theme.card,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "14px",
            }}
          >
            <h3
              style={{
                fontSize: "15px",
                marginBottom: "6px",
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                color: theme.muted,
                marginBottom: "10px",
                lineHeight: "1.5",
              }}
            >
              {project.description}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.accent,
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResumeProjects;
