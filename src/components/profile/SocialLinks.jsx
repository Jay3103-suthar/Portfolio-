import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useTheme } from "../../theme/ThemeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

const SocialLinks = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      style={{
        background: theme.card,
        border: `2px solid ${theme.border}`,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <h4 style={{ marginBottom: "16px" }}>Contact</h4>

      {profile.socials.map((item) => (
        <motion.div
          key={item.label}
          variants={itemVariants}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "13px",
            marginBottom: "10px",
            gap: "12px",
          }}
        >
          <span style={{ color: theme.muted }}>{item.label}</span>

          <motion.a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            style={{
              color: theme.accent,
              textDecoration: "none",
              fontWeight: 500,
              wordBreak: "break-all",
            }}
          >
            {item.value}
          </motion.a>
        </motion.div>
      ))}

      {/* Responsive helper */}
      <style>
        {`
          @media (max-width: 480px) {
            h4 {
              font-size: 14px;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default SocialLinks;
