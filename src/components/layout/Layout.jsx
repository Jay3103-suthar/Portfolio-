import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

import ThemeCard from "../../theme/ThemeCard.jsx";
import ProfileCard from "../profile/ProfileCard.jsx";
import SocialLinks from "../profile/SocialLinks";
import TechStack from "../profile/TechStack";
import Experience from "../profile/Experience";
import Education from "../profile/Education";
import BuyMeCoffee from "../profile/BuyMeCoffee.jsx";
import GithubRepos from "../projects/GithubRepos.jsx";
import ResumeProjects from "../projects/ResumeProjects";
import Contact from "../contact/Contact";
import SidebarFiller from "../profile/SidebarFiller.jsx";
import SidebarThanks from "../profile/SidebarThanks.jsx";

const Layout = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        background: theme.background,
        color: theme.text,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "32px",
          padding: "32px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* ========== LEFT SIDEBAR ========== */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            alignSelf: "flex-start",
          }}
        >
          <ThemeCard />
          <ProfileCard />
          <SocialLinks />
          <TechStack />
          <Experience />
          <Education />
          <SidebarFiller />
          <BuyMeCoffee />
          <SidebarThanks />
          </motion.aside>

        {/* ========== MAIN CONTENT ========== */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <section
            style={{
              background: theme.card,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <GithubRepos />
          </section>

          <section
            style={{
              background: theme.card,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <ResumeProjects />
          </section>

          <section
            style={{
              background: theme.card,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "20px",
            }}
          >
            <Contact />
          </section>
        </motion.main>
      </div>

      {/* ===== RESPONSIVE FIX (INLINE, SAFE) ===== */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </motion.div>
  );
};

export default Layout;
