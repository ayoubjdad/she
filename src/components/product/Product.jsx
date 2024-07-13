import React from "react";
import styles from "./Product.module.scss";
import { Categories } from "../../data/data";

export default function Product({
  key,
  image,
  discount,
  outOfStock,
  categoryID,
  title,
  description,
  price,
}) {
  const discoutPrice = price + (price * discount) / 100;
  const category = Categories.find((cat) => cat.id === categoryID);

  return (
    <div key={key} className={styles.product}>
      <div
        className={styles.productImage}
        style={{ backgroundImage: `url("${image}")` }}
      >
        {discount ? <span className={styles.tag}>-{discount}%</span> : null}
        {outOfStock ? <span className={styles.tag}>Epuisé</span> : null}
      </div>
      <div className={styles.infos}>
        <p className={styles.category}>{category.alias}</p>
        <p>{title}</p>
        <div style={{ display: "flex", gap: "6px" }}>
          <span style={{ color: "#c29958" }}>{price} DH</span>
          {discount ? (
            <span style={{ color: "gray", textDecoration: "line-through" }}>
              {discoutPrice} DH
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
