import React from "react";
import styles from "./Header.module.scss";
import { useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div
      className={styles.main}
      style={{
        color: pathname === "/product" ? "#fffcf0" : "#291f1e",
        backgroundColor: pathname === "/product" ? "#291f1e" : "#fffcf0",
      }}
    >
      <span className={styles.text}>FREE SHIPPING ON ORDERS OVER 1000 DH</span>
    </div>
  );
}
