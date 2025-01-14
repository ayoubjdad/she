import React from "react";
import styles from "./Categories.module.scss";
import { Chip } from "@mui/material";

export default function Categories() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Chip
          label="Notre expertise"
          style={{ color: "#291f1e", borderColor: "#291f1e" }}
        />
        <h1 className={styles.title}>
          Créations mettant en valeur un éventail de Gemmes éclatantes.
        </h1>

        <div className={styles.categories}>
          <li className={styles.list}>
            {["Boucles d'oreilles", "Bracelets", "Colliers", "Bagues"].map(
              (item, index) => (
                <ul key={index}>
                  {item}
                  <span className={styles.arrow}>
                    <i className="fi fi-rs-arrow-right" />
                  </span>
                </ul>
              )
            )}
          </li>

          <div className={styles.imageContainer}>
            <img
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
