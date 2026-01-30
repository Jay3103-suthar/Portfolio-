import { ThemeProvider } from "./theme/ThemeContext";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
