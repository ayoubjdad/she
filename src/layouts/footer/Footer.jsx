import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.gridElement}>
            <img
              className={styles.logo}
              src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            />
            <p className={styles.description}>
              We are a team of designers and developers that create high quality
              wordpress, shopify, Opencart.
            </p>
          </div>

          <div className={styles.gridElement}>
            <p className={styles.title}>Contact Us</p>
            <p>
              <i className="fi fi-rr-envelope" />
              contact@domain.com
            </p>
            <p>
              <i className="fi fi-rr-phone-flip" />
              +212 7 07 22 01 99
            </p>
          </div>

          <div className={styles.gridElement}>
            <p className={styles.title}>Follow Us</p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2024 Majdouline Jewelry | Built by BigFocus.</p>{" "}
        <img src="https://corano-demo.myshopify.com/cdn/shop/files/payment_large.png?v=1613781786" />
      </div>
    </div>
  );
}
