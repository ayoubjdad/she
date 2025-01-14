import React from "react";
import styles from "./BestSeller.module.scss";
import { Button, Chip } from "@mui/material";
import { Product } from "../../components/product/Product";
import { products } from "../../data/data";

export default function BestSeller() {
  const bestSellerProducts = products
    .filter((product) => product.isBestSeller)
    .slice(0, 4);

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
          {bestSellerProducts.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
