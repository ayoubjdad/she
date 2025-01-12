import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Header from "./layouts/header/Header";
import Menu from "./layouts/menu/Menu";
import Home from "./pages/home/Home";
import { theme } from "./theme/overrides";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Menu />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
