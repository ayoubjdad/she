import React from "react";
import styles from "./Product.module.scss";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router";

export const Product = ({ product = {} }) => {
  const { id, name, material, price, image, description, category } = product;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/product", { state: { product } }); // Redirect to /product with product data
  };

  return (
    <div className={styles.productCard} onClick={onClick} key={id}>
      <div
        className={styles.imageContainer}
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)), url("${image}")`,
        }}
      >
        <Chip label={category} />
      </div>
      <div className={styles.productContainer}>
        <div>
          <h3>{name}</h3>
          <p className={styles.material}>{material}</p>
        </div>
        <p className={styles.price}>{price} DH</p>
      </div>
    </div>
  );
};
