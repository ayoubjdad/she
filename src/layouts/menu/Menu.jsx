import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { Button, Chip, Divider, Drawer } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../context/CartProvider";

export default function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cart } = useCart();

  const cartLength = cart?.length || 0;
  const isHomePage = pathname === "/";
  const darkChipStyle = !isHomePage
    ? { color: "#291f1e", borderColor: "#291f1e" }
    : {};

  const [open, setOpen] = useState(false);

  const onClick = (link) => {
    navigate(`/${link}`);
    setOpen(false);
  };

  return (
    <>
      <CartDrawer
        open={open}
        setOpen={setOpen}
        cartItems={cart}
        onClick={onClick}
      />

      <div
        className={styles.main}
        style={{
          color: !isHomePage ? "#291f1e" : "#fffcf0",
          backgroundColor: !isHomePage ? "#fffcf0" : "transparent",
          borderBottom: !isHomePage ? "1px solid #dcd9cd" : "none",
        }}
      >
        <div className={styles.container}>
          <div className={styles.group}>
            <Chip
              label="Boutique"
              style={darkChipStyle}
              onClick={() => onClick("shop")}
            />
            <Chip
              label="Nouveautés"
              style={darkChipStyle}
              onClick={() => onClick("new")}
            />
            <Chip
              label="Offres Limitées"
              style={darkChipStyle}
              onClick={() => onClick("limited")}
            />
          </div>
          <span
            className={styles.logo}
            style={{ color: isHomePage ? "#fffcf0" : "#291f1e" }}
            onClick={() => onClick("")}
          >
            Sorrow™
          </span>
          <div className={`${styles.group} ${styles.groupEnd}`}>
            {/* <Chip label="Compte" style={darkChipStyle} /> */}
            <Chip
              label="À propos"
              style={darkChipStyle}
              onClick={() => onClick("about")}
            />
            <Chip
              label={`Panier (${cartLength})`}
              style={darkChipStyle}
              onClick={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const CartDrawer = ({
  open,
  setOpen = () => {},
  cartItems = [],
  onClick = () => {},
}) => {
  if (!cartItems?.length) {
    return (
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <div className={styles.cartContainer}>
          <h2>Panier</h2>
          <div className={styles.emptyCart}>
            <p>Votre panier est vide.</p>
          </div>
        </div>
      </Drawer>
    );
  }

  return (
    <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
      <div className={styles.cartContainer}>
        <h2>Panier</h2>

        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <img src={item.image} alt="" />
            <div className={styles.cartItemInfos}>
              <span>{item.name}</span>
              <span>
                {item.quantity} x {item.price} DH
              </span>
            </div>
          </div>
        ))}

        <Divider />

        <div className={styles.cartTotal}>
          <span>Total: </span>
          <span>
            {cartItems.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}{" "}
            DH
          </span>
        </div>

        <Button onClick={() => onClick("checkout")}>
          Procéder au paiement
        </Button>
      </div>
    </Drawer>
  );
};
