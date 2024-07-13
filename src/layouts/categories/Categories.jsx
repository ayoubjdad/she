import React from "react";
import styles from "./Categories.module.scss";
import SectionTitle from "../../components/section-title/SectionTitle";

export default function Categories() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.categories}>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    </div>
  );
}

const Category = () => (
  <div className={styles.category}>
    <div
      className={styles.categoryImage}
      style={{
        backgroundImage: `url("https://corano-demo.myshopify.com/cdn/shop/files/img3-middle_360x.jpg?v=1613780862")`,
      }}
    >
      <span className={styles.title}>Neclaces</span>
    </div>
  </div>
);
