import React from "react";
import styles from "./Product.module.scss";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router";

export const Product = ({ product = {} }) => {
  const {
    id,
    name,
    material,
    price,
    image,
    description,
    category,
    promoPrice,
  } = product;
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
        {promoPrice && (
          <Chip
            style={{
              marginLeft: 8,
              border: "none",
              color: "#fff",
              backgroundColor: "#781428",
            }}
            label={`-${Math.round(((price - promoPrice) / price) * 100)}%`}
          />
        )}
      </div>

      <div className={styles.productContainer}>
        <div>
          <h3>{name}</h3>
          <p className={styles.material}>{material}</p>
        </div>
        <div className={styles.priceContainer}>
          <p
            className={styles.price}
            style={{ textDecoration: promoPrice ? "line-through" : "none" }}
          >
            {price} DH
          </p>
          {promoPrice && <p className={styles.promoPrice}>{promoPrice} DH</p>}
        </div>
      </div>
    </div>
  );
};
