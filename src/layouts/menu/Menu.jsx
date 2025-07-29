import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { Box, Button, Chip, Divider, Drawer } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../context/CartProvider";
import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";

export default function Menu() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart();

  const cartLength = cart?.length || 0;
  const isHomePage = pathname === "/";
  const darkChipStyle = !isHomePage
    ? { color: "#231918", borderColor: "#231918" }
    : {};

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

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
        onClose={onClose}
        onRemove={removeFromCart}
      />

      <div
        className={styles.main}
        style={{
          color: !isHomePage ? "#231918" : "#fffcf0",
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
          </div>
          <span
            className={styles.logo}
            style={{ color: isHomePage ? "#fffcf0" : "#231918" }}
            onClick={() => onClick("")}
          >
            {isHomePage ? (
              <img src={logo} alt="logo" />
            ) : (
              <img src={logoDark} alt="logo" />
            )}
          </span>

          <div className={`${styles.group} ${styles.groupEnd}`}>
            {/* <Chip label="Compte" style={darkChipStyle} /> */}
            {/* <Chip
              label="À propos"
              style={darkChipStyle}
              onClick={() => onClick("about")}
            /> */}
            <Chip
              label="Promos"
              style={darkChipStyle}
              onClick={() => onClick("promotions")}
            />
            <Chip
              label={`Panier (${cartLength})`}
              style={darkChipStyle}
              onClick={onOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const CartDrawer = ({
  open,
  cartItems = [],
  onClick = () => {},
  onClose = () => {},
  onRemove = () => {},
}) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <div className={styles.cartContainer}>
        <div className={styles.cartHeader}>
          <h2>Panier</h2>
          <Box component="i" className="fi fi-bs-cross" onClick={onClose} />
        </div>

        {!cartItems?.length ? (
          <div className={styles.emptyCart}>
            <p>Votre panier est vide.</p>
          </div>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div key={index} className={styles.cartItemContainer}>
                <div className={styles.cartItem}>
                  <img src={item.image} alt="" />
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
          </>
        )}
      </div>
    </Drawer>
  );
};
