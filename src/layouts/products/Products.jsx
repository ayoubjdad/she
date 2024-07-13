import React from "react";
import styles from "./Products.module.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import Product from "../../components/product/Product";
import { ProductsList } from "../../data/data";

export default function Products() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SectionTitle />
        <div className={styles.products}>
          {ProductsList.map((props, index) => (
            <Product
              key={index}
              image={props.image}
              discount={props.discount}
              outOfStock={props.outOfStock}
              categoryID={props.categoryID}
              title={props.alias}
              description={props.description}
              price={props.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
