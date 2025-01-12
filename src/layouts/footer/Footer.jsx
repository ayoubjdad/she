import React from "react";
import styles from "./Footer.module.scss";
import { Button, Chip, TextField } from "@mui/material";

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>
            Get exclusive access to jewelry trends, insider stories by
            Subscribing to our newsletter.
          </h1>

          <div className={styles.email}>
            <TextField placeholder="Enter your email" variant="outlined" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <Chip label="Copyright © 2022 She Jewelry" />
        <div className={styles.pages}>
          <Chip label="Shop" />
          <Chip label="Privacy Policy" />
          <Chip label="Terms of service" />
          <div className={styles.divider} />
          <Chip label="Instagram" />
          <Chip label="Facebook" />
        </div>
      </div>
    </>
  );
}
