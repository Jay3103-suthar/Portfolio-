import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const BuyMeCoffee = () => {
  const { theme } = useTheme();

  return (
    <motion.a
      href="https://buymeacoffee.com/jaysuthar"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4 }}
      style={{
        
        bottom: "24px",

        height: "72px",              // 👈 EXTRA HEIGHT
        borderRadius: "14px",
        padding: "14px 18px",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        background: `linear-gradient(
          135deg,
          ${theme.accent},
          ${theme.border}
        )`,
        color: "#000",
        textDecoration: "none",
        fontWeight: 600,

        boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
      }}
    >
      {/* LEFT */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          style={{ fontSize: "28px" }}
        >
          ☕
        </motion.div>

        <div>
          <div style={{ fontSize: "15px" }}>Upgrade Coffee</div>
          <div style={{ fontSize: "12px", opacity: 0.75 }}>
            Support my work
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <motion.span
        whileHover={{ x: 4 }}
        style={{
          fontSize: "20px",
          opacity: 0.7,
        }}
      >
        →
      </motion.span>
    </motion.a>
  );
};

export default BuyMeCoffee;
