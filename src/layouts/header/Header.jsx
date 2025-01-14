import React from "react";
import styles from "./Header.module.scss";
import { useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div
      className={styles.main}
      style={{
        color: !isHomePage ? "#fffcf0" : "#291f1e",
        backgroundColor: !isHomePage ? "#291f1e" : "#fffcf0",
      }}
    >
      <span className={styles.text}>
        <i className="fi fi-rs-box-check" /> FREE SHIPPING ON ORDERS OVER 1000
        DH
      </span>
    </div>
  );
}
