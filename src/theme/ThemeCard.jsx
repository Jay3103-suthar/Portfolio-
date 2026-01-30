// src/theme/ThemeCard.jsx
import ThemeDropdown from "./ThemeDropdown";
import { useTheme } from "./ThemeContext";

const ThemeCard = () => {
  const { themeName, theme } = useTheme();

  return (
    <div
      style={{
        border: `2px solid ${theme.border}`,
        borderRadius: "10px",
        padding: "12px 14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.card,
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>Theme</div>
        <div style={{ fontSize: "12px", color: theme.muted }}>
          {themeName}
        </div>
      </div>
      <ThemeDropdown />
    </div>
  );
};

export default ThemeCard;
