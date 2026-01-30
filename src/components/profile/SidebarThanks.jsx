import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const SidebarThanks = () => {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      style={{
        background: theme.card,
        border: `2px dashed ${theme.border}`,
        borderRadius: "12px",
        padding: "20px",
        textAlign: "center",
        color: theme.muted,
        fontSize: "13px",
      }}
    >
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ marginBottom: "6px" }}
      >
        Thanks for visiting my portfolio
      </motion.div>

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ fontSize: "16px" }}
      >
        🙌
      </motion.div>
    </motion.section>
  );
};

export default SidebarThanks;
