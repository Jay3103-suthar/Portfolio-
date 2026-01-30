import { motion } from "framer-motion";
import { education } from "../../data/education";
import { useTheme } from "../../theme/ThemeContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemAnim = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

const Education = () => {
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
      <h4 style={{ marginBottom: "16px" }}>Education</h4>

      {education.map((item, index) => (
        <motion.div
          key={index}
          variants={itemAnim}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          style={{
            paddingLeft: "12px",
            borderLeft: `2px solid ${theme.accent}`,
            marginBottom: "16px",
          }}
        >
          <p
            style={{
              fontWeight: 600,
              fontSize: "14px",
              marginBottom: "2px",
            }}
          >
            {item.degree}
          </p>

          <p
            style={{
              fontSize: "13px",
              color: theme.muted,
            }}
          >
            {item.institute}
          </p>

          <p
            style={{
              fontSize: "12px",
              color: theme.muted,
            }}
          >
            {item.duration} · {item.score}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
