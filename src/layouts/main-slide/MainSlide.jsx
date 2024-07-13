import React from "react";
import styles from "./MainSlide.module.scss";
import Button from "../../components/button/Button";

export default function MainSlide() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ display: "grid", gap: "24px" }}>
            <h1 className={styles.title}>
              Shine Bright Like Peronality - With Amara
            </h1>
            <p className={styles.description}>
              Rings, Occasion Pieces, Pandora & More.
            </p>
            <Button value="Read more" />
          </div>
        </div>
      </div>
    </div>
  );
}
