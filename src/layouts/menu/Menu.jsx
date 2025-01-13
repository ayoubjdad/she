import React from "react";
import styles from "./Menu.module.scss";
import { Chip } from "@mui/material";
import { useLocation } from "react-router";

export default function Menu() {
  const { pathname } = useLocation();

  const darkChipStyle =
    pathname === "/product"
      ? {
          color: "#291f1e",
          borderColor: "#291f1e",
        }
      : {};

  return (
    <div
      className={styles.main}
      style={{
        color: pathname === "/product" ? "#291f1e" : "#fffcf0",
        backgroundColor: pathname === "/product" ? "#fffcf0" : "transparent",
        borderBottom: pathname === "/product" ? "1px solid #dcd9cd" : "none",
      }}
    >
      <div className={styles.container}>
        <div className={styles.group}>
          <Chip label="Shop" style={darkChipStyle} />
          <Chip label="New Arrival" style={darkChipStyle} />
          <Chip label="Limited Offers" style={darkChipStyle} />
          <Chip label="About" style={darkChipStyle} />
        </div>
        <span
          className={styles.logo}
          style={{ color: pathname !== "/product" ? "#fffcf0" : "#291f1e" }}
          onClick={() => (window.location.href = "/")}
        >
          Sorrow™
        </span>
        <div className={`${styles.group} ${styles.groupEnd}`}>
          <Chip label="Account" style={darkChipStyle} />
          <Chip label="Cart (0)" style={darkChipStyle} />
        </div>
      </div>
    </div>
  );
}
