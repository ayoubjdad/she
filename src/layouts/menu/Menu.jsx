import React from "react";
import styles from "./Menu.module.scss";
import { Chip } from "@mui/material";

export default function Menu() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.group}>
          <Chip label="Shop" />
          <Chip label="New Arrival" />
          <Chip label="Limited Offers" />
          <Chip label="About" />
        </div>
        <span className={styles.logo}>Sorrow™</span>
        <div className={`${styles.group} ${styles.groupEnd}`}>
          <Chip label="Account" />
          <Chip label="Cart (0)" />
        </div>
      </div>
    </div>
  );
}
