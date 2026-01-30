import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import { useTheme } from "../../theme/ThemeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const TechStack = () => {
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
      <h4 style={{ marginBottom: "16px" }}>Tech Stack</h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        {profile.techStack.map((tech) => (
          <motion.span
            key={tech}
            variants={pillVariants}
            whileHover={{
              scale: 1.06,
              backgroundColor: theme.accent,
              color: "#fff",
              borderColor: theme.accent,
            }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              fontSize: "12px",
              padding: "6px 12px",
              borderRadius: "999px",
              border: `1px solid ${theme.border}`,
              cursor: "default",
              userSelect: "none",
              lineHeight: 1.4,
            }}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Mobile tweak */}
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

export default TechStack;
