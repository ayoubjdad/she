import { ThemeProvider } from "@emotion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layouts/header/Header";
import Menu from "./layouts/menu/Menu";
import Home from "./pages/home/Home";
import Dashboard from "./dashboard/Dashboard";
import { theme } from "./theme/overrides";
import Footer from "./layouts/footer/Footer";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";
import Checkout from "./pages/checkout/Checkout";
import PrivacyTerms from "./pages/privacy-terms/PrivacyTerms";
import GeneralConditions from "./pages/general-conditions/GeneralConditions";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <Menu />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/promotions" element={<Shop isPromotion />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="/politique-de-confidentialite"
                    element={<PrivacyTerms />}
                  />
                  <Route
                    path="/conditions-generales"
                    element={<GeneralConditions />}
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
