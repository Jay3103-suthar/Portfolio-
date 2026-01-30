// src/theme/ThemeDropdown.jsx
import { useState } from "react";
import { useTheme } from "./ThemeContext";

const ThemeDropdown = () => {
  const { themeList, setThemeName, themeName, theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          border: `0px solid ${theme.border}`,
          background: theme.card,
          borderRadius: "6px",
          padding: "6px 8px",
          cursor: "pointer",
          color: theme.text,
        }}
      >
        🎨
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "38px",
            width: "200px",
            background: theme.card,
            border: `1px solid ${theme.border}`,
            borderRadius: "10px",
            padding: "6px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            zIndex: 10,
          }}
        >
          {themeList.map((name) => (
            <div
              key={name}
              onClick={() => {
                setThemeName(name);
                setOpen(false);
              }}
              style={{
                padding: "8px",
                borderRadius: "6px",
                cursor: "pointer",
                background:
                  themeName === name ? theme.background : "transparent",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
