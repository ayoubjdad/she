import React from "react";
import styles from "./BestSeller.module.scss";
import { Button, Chip } from "@mui/material";

export default function BestSeller() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Chip
          label="Best Seller Product"
          style={{ color: "#291f1e", borderColor: "#291f1e" }}
        />
        <div className={styles.title}>
          <h1>Crafted by Master artisans.</h1>
          <p>
            Expertly crafted by skilled artisans, ensuring every piece reflects
            true mastery.
          </p>
        </div>
        <Button>View All Products</Button>

        <div className={styles.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export const Product = ({ title, price, image }) => {
  return (
    <div className={styles.productCard}>
      <div
        className={styles.imageContainer}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url("https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg")`,
        }}
      >
        <Chip label="New Arrival" />
      </div>
      <div className={styles.productContainer}>
        <div>
          <h3>Sorroewela Earrings</h3>
          <p className={styles.material}>Gold Vermeil</p>
        </div>
        <p className={styles.price}>218 DH</p>
      </div>
    </div>
  );
};
