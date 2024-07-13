import React, { useState } from "react";
import styles from "./Shop.module.scss";
import SectionTitle from "../../components/section-title/SectionTitle";
import Button from "../../components/button/Button";
import Product from "../../components/product/Product";
import { Categories, ProductsList } from "../../data/data";

export default function Shop() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <SectionTitle />

        <div className={styles.productsContainer}>
          <div className={styles.filters}>
            <div>
              <h2>Prix</h2>
              <p>
                de{" "}
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className={styles.inputPrix}
                />{" "}
                à{" "}
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className={styles.inputPrix}
                />
              </p>
            </div>

            <div>
              <h2>Category</h2>
              {Categories.map(({ alias }, index) => (
                <Checkbox key={index} title={alias} />
              ))}
            </div>

            <Button value="Filtrer" />
          </div>

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
    </div>
  );
}

const Checkbox = ({ title }) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input type="checkbox" /> {title}
    </div>
  );
};
