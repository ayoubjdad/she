import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { Box, Button, Chip, Divider, Drawer } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../context/CartProvider";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";
import { useIsMobile } from "../../helpers/functions.helper";

const NAV_ITEMS = [
  { label: "Boutique", path: "shop" },
  { label: "Nouveautés", path: "new" },
  { label: "Promos", path: "promotions" },
];

export default function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  const cartLength = cart?.length || 0;
  const isHomePage = pathname === "/";
  const isMobile = useIsMobile();

  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const logoSrc = isHomePage ? logo : logoDark;

  const textColor = isHomePage ? "#fffcf0" : "#231918";
  const bgColor = isHomePage ? "transparent" : "#fffcf0";
  const borderBottom = isHomePage ? "none" : "1px solid #dcd9cd";
  const darkChipStyle = isHomePage
    ? {}
    : { color: "#231918", borderColor: "#231918" };

  const handleNavigate = (path) => {
    navigate(`/${path}`);
    setOpenCart(false);
    setOpenMenu(false);
  };

  return (
    <>
      <CartDrawer
        open={openCart}
        cartItems={cart}
        onClose={() => setOpenCart(false)}
        onRemove={removeFromCart}
        onCheckout={() => handleNavigate("checkout")}
      />

      {isMobile ? (
        <>
          <MobileMenu
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            cartLength={cartLength}
            onNavigate={handleNavigate}
            onOpenCart={() => setOpenCart(true)}
          />
          <HeaderMobile
            logoSrc={logoSrc}
            textColor={textColor}
            bgColor={bgColor}
            borderBottom={borderBottom}
            onLogoClick={() => handleNavigate("")}
            onOpenMenu={() => setOpenMenu(true)}
            onOpenCart={() => setOpenCart(true)}
          />
        </>
      ) : (
        <HeaderDesktop
          logoSrc={logoSrc}
          textColor={textColor}
          bgColor={bgColor}
          borderBottom={borderBottom}
          darkChipStyle={darkChipStyle}
          cartLength={cartLength}
          onLogoClick={() => handleNavigate("")}
          onNavigate={handleNavigate}
          onOpenCart={() => setOpenCart(true)}
        />
      )}
    </>
  );
}

/* ------------------- Subcomponents ------------------- */

const HeaderDesktop = ({
  logoSrc,
  textColor,
  bgColor,
  borderBottom,
  darkChipStyle,
  cartLength,
  onLogoClick,
  onNavigate,
  onOpenCart,
}) => (
  <div
    className={styles.main}
    style={{ color: textColor, backgroundColor: bgColor, borderBottom }}
  >
    <div className={styles.container}>
      <div className={styles.group}>
        {NAV_ITEMS.slice(0, 2).map((item) => (
          <Chip
            key={item.path}
            label={item.label}
            style={darkChipStyle}
            onClick={() => onNavigate(item.path)}
          />
        ))}
      </div>

      <span className={styles.logo} onClick={onLogoClick}>
        <img src={logoSrc} alt="logo" />
      </span>

      <div className={`${styles.group} ${styles.groupEnd}`}>
        <Chip
          label={NAV_ITEMS[2].label}
          style={darkChipStyle}
          onClick={() => onNavigate(NAV_ITEMS[2].path)}
        />
        <Chip
          label={`Panier (${cartLength})`}
          style={darkChipStyle}
          onClick={onOpenCart}
        />
      </div>
    </div>
  </div>
);

const HeaderMobile = ({
  logoSrc,
  textColor,
  bgColor,
  borderBottom,
  onLogoClick,
  onOpenMenu,
  onOpenCart,
}) => (
  <div
    className={styles.mainMobile}
    style={{ color: textColor, backgroundColor: bgColor, borderBottom }}
  >
    <div className={styles.container}>
      <Box
        component="i"
        className="fi fi-rr-menu-burger"
        style={{ justifyContent: "flex-start" }}
        onClick={onOpenMenu}
      />
      <span className={styles.logoMobile} onClick={onLogoClick}>
        <img src={logoSrc} alt="logo" />
      </span>
      <Box
        component="i"
        className="fi fi-rr-shopping-bag"
        style={{ justifyContent: "flex-end" }}
        onClick={onOpenCart}
      />
    </div>
  </div>
);

const CartDrawer = ({
  open,
  cartItems = [],
  onClose,
  onRemove,
  onCheckout,
}) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>Panier</h2>
          <Box component="i" className="fi fi-bs-cross" onClick={onClose} />
        </div>

        {!cartItems.length ? (
          <div className={styles.emptyCart}>
            <p>Votre panier est vide.</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItemContainer}>
                <div className={styles.cartItem}>
                  <img src={item.image} alt={item.name} />
                  <div className={styles.cartItemInfos}>
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} x {item.price} DH
                    </span>
                  </div>
                </div>
                <Box
                  component="i"
                  className="fi fi-rs-trash"
                  onClick={() => onRemove(item.id)}
                />
              </div>
            ))}
            <Divider />
            <div className={styles.cartTotal}>
              <span>Total:</span>
              <span>{total} DH</span>
            </div>
            <Button onClick={onCheckout}>Procéder au paiement</Button>
          </>
        )}
      </div>
    </Drawer>
  );
};

const MobileMenu = ({ open, onClose, cartLength, onNavigate, onOpenCart }) => {
  const handleClick = (label) => {
    if (label.startsWith("Panier")) {
      onOpenCart();
    } else {
      const item = NAV_ITEMS.find((i) => i.label === label);
      if (item) onNavigate(item.path);
    }
    onClose();
  };

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>Menu</h2>
          <Box component="i" className="fi fi-bs-cross" onClick={onClose} />
        </div>
        <Divider />
        {[...NAV_ITEMS.map((i) => i.label), `Panier (${cartLength})`].map(
          (label) => (
            <div
              key={label}
              className={styles.cartItemInfos}
              onClick={() => handleClick(label)}
            >
              <span>{label}</span>
            </div>
          )
        )}
      </div>
    </Drawer>
  );
};
