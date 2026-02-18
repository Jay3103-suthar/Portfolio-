import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const GITHUB_USERNAME = "Jay3103-suthar";

const ProfileCard = () => {
  const { theme } = useTheme();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);

  /* ---------- Loading State ---------- */
  if (!profile) {
    return (
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
        style={{
          background: theme.card,
          border: `2px solid ${theme.border}`,
          borderRadius: "12px",
          padding: "20px",
          textAlign: "center",
          fontSize: "13px",
          color: theme.muted,
        }}
      >
        Loading profile…
      </motion.div>
    );
  }

  /* ---------- Main Card ---------- */
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{
        background: theme.card,
        border: `2px solid ${theme.border}`,
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Avatar */}
      <motion.img
        src={profile.avatar_url}
        alt={profile.name}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "0 auto 12px",
          border: `3px solid ${theme.accent}`,
        }}
      />

      {/* Name */}
      <h2 style={{ fontSize: "18px", marginBottom: "6px" }}>
        {profile.name || "Jay Suthar"}
      </h2>

      {/* Role */}
      <p
        style={{
          fontSize: "13px",
          color: theme.muted,
          marginBottom: "10px",
        }}
      >
        MERN Stack Developer
      </p>

      {/* Location */}
      {profile.location && (
        <p
          style={{
            fontSize: "12px",
            color: theme.muted,
            marginBottom: "14px",
          }}
        >
          📍 {profile.location}
        </p>
      )}

      {/* Resume */}
      <motion.a
        href={`${import.meta.env.BASE_URL}jay.pdf`}
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "8px",
          background: theme.accent,
          color: "#fff",
          fontSize: "13px",
          textDecoration: "none",
        }}
      >
        Download Resume
      </motion.a>

      {/* Mobile tweaks */}
      <style>
        {`
          @media (max-width: 480px) {
            img {
              width: 90px !important;
              height: 90px !important;
            }
            h2 {
              font-size: 16px !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default ProfileCard;
