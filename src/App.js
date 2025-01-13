import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layouts/header/Header";
import Menu from "./layouts/menu/Menu";
import Home from "./pages/home/Home";
import { theme } from "./theme/overrides";
import Footer from "./layouts/footer/Footer";
import Product from "./pages/product/Product";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
