import { motion } from "framer-motion";
import { experience } from "../../data/experience";
import { useTheme } from "../../theme/ThemeContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Experience = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      style={{
        background: theme.card,
        border: `2px solid ${theme.border}`,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <h4 style={{ marginBottom: "16px" }}>Experience</h4>

      {experience.map((item, index) => (
        <motion.div
          key={index}
          variants={itemAnim}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25 }}
          style={{
            paddingLeft: "12px",
            borderLeft: `2px solid ${theme.accent}`,
            marginBottom: "18px",
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "2px",
            }}
          >
            {item.role}
          </p>

          <p
            style={{
              fontSize: "13px",
              color: theme.muted,
            }}
          >
            {item.company}
          </p>

          <p
            style={{
              fontSize: "12px",
              color: theme.muted,
              marginBottom: "8px",
            }}
          >
            {item.duration}
          </p>

          <ul
            style={{
              paddingLeft: "16px",
              fontSize: "13px",
              lineHeight: "1.5",
            }}
          >
            {item.description.map((point, i) => (
              <li key={i} style={{ marginBottom: "6px" }}>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
