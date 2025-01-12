import React from "react";
import styles from "./Main.module.scss";
import { Button } from "@mui/material";

export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.textArea}>
            <p className={styles.title}>
              Artful mastery within each precious gem.
            </p>
            <p className={styles.description}>
              Each gem embodies meticulous craftsmanship, a timeless testament
              to unparalleled skill and elegance.
            </p>
          </div>
          <Button style={{ backgroundColor: "#fffcf0", color: "#291f1e" }}>
            Discover Now
          </Button>
        </div>
      </div>
    </>
  );
}
