import { useTheme } from "../../theme/ThemeContext";

const Header = () => {
  const { themeName, setThemeName, theme } = useTheme();

  return (
    <header
      style={{
        background: theme.card,
        padding: "16px 20px",
        borderBottom: "1px solid #e5e7eb"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ fontSize: "18px" }}>My Portfolio</h2>

        {/* Simple Theme Selector */}
        <select
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: theme.card,
            color: theme.text
          }}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="minimal">Minimal</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
