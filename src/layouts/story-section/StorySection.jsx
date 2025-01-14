import React from "react";
import styles from "./StorySection.module.scss";
import { Button } from "@mui/material";

export default function StorySection() {
  return (
    <div className={styles.main}>
      <div className={styles.storySection}>
        <div className={styles.content}>
          <span>
            Fabriquer des bijoux intemporels
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />
            qui portent des histoires personnelles. Chaque pièce reflète un
            savoir-faire et une élégance profonde
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />
            résonnant avec des récits uniques. Explorez notre collection où la
            beauté rencontre l'émotion, dévoilant des parures
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />
            avec des histoires profondes.
          </span>
        </div>
        <Button>Lire notre histoire</Button>
      </div>

      <div className={styles.divider} />

      <div className={styles.statistics}>
        <div className={styles.stat}>
          <h1>128</h1>
          <p>
            Découvrez nos collections dans 128 pays, rapprochant nos bijoux de
            vous, où que vous soyez.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>29K</h1>
          <p>
            Rejoignez une communauté de 29K et plus, où la satisfaction
            rencontre un artisanat exquis.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>189+</h1>
          <p>
            Explorez une gamme diversifiée de 189 variétés de pierres précieuses
            uniques, chacune ajoutant son propre charme à notre collection.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>20+</h1>
          <p>
            Nous soutenons fièrement plus de 20 communautés artisanales dans le
            monde entier, favorisant l'artisanat et l'autonomisation.
          </p>
        </div>
      </div>
    </div>
  );
}
