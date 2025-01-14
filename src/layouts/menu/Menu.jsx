import React from "react";
import styles from "./Menu.module.scss";
import { Chip } from "@mui/material";
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

  const onClick = (link) => navigate(`/${link}`);

  return (
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
          <Chip label={`Panier (${cartLength})`} style={darkChipStyle} />
        </div>
      </div>
    </div>
  );
}
