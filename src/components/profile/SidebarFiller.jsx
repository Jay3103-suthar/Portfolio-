import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const SidebarActivityPulse = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        minHeight: "180px",
        borderRadius: "12px",
        border: `1px solid ${theme.border}`,
        background: theme.card,
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: 600,
          fontSize: "14px",
          marginBottom: "14px",
        }}
      >
        Recent Activity
      </div>

      {/* Pulse lines */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
            style={{
              height: "10px",
              borderRadius: "999px",
              background: theme.border,
            }}
          />
        ))}
      </div>

      {/* Spacer to naturally fill sidebar */}
      <div style={{ flexGrow: 1 }} />

      {/* Footer hint */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          fontSize: "11px",
          color: theme.muted,
          marginTop: "12px",
          textAlign: "center",
        }}
      >
        syncing activity…
      </motion.div>
    </motion.div>
  );
};

export default SidebarActivityPulse;
