import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useTheme } from "../../theme/ThemeContext";

const Contact = () => {
  const formRef = useRef();
  const { theme } = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wn9896x",
        "template_5tfr7cj",
        formRef.current,
        "SAv927g67sH3RGCbZ"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message ❌");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 style={{ marginBottom: "16px" }}>Contact Me</h3>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        style={{
          display: "grid",
          gap: "14px",
          maxWidth: "650px", // 👈 responsive
        }}
      >
        <AnimatedInput
          type="text"
          name="name"
          placeholder="Your Name"
          theme={theme}
        />

        <AnimatedInput
          type="email"
          name="email"
          placeholder="Your Email"
          theme={theme}
        />

        <AnimatedInput
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          theme={theme}
        />

        <AnimatedTextarea
          name="message"
          placeholder="Your Message"
          theme={theme}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          style={{
            background: theme.accent,
            color: "#fff",
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

/* ---------- Reusable animated fields ---------- */

const fieldVariant = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedInput = ({ theme, ...props }) => (
  <motion.input
    variants={fieldVariant}
    required
    {...props}
    style={inputStyle(theme)}
  />
);

const AnimatedTextarea = ({ theme, ...props }) => (
  <motion.textarea
    variants={fieldVariant}
    rows={4}
    required
    {...props}
    style={inputStyle(theme)}
  />
);

const inputStyle = (theme) => ({
  padding: "10px",
  borderRadius: "8px",
  border: `1px solid ${theme.border}`,
  background: theme.background,
  color: theme.text,
  fontSize: "14px",
});

export default Contact;
