import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.main}>
      <span className={styles.text}>FREE SHIPPING ON ORDERS OVER 1000 DH</span>
    </div>
  );
}
