import React from "react";
import styles from "./StorySection.module.scss";
import { Button } from "@mui/material";

export default function StorySection() {
  return (
    <div className={styles.main}>
      <div className={styles.storySection}>
        <div className={styles.content}>
          <span>
            Crafting timeless jewelry{" "}
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />{" "}
            that carries personal stories. Each piece reflects artistry and
            soulful elegance{" "}
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />{" "}
            resonating with unique narratives. Explore our collection where
            beauty meets emotion, revealing adornments{" "}
            <img
              className={styles.image}
              src="https://www.vam.ac.uk/on/demandware.static/-/Sites-VAM_Storefront/default/dw88c1556f/images/category/jewellery/jewellery_homepage_desktop.jpg"
              alt=""
            />{" "}
            with profound tales.
          </span>
        </div>
        <Button>Read Our Story</Button>
      </div>

      <div className={styles.divider} />

      <div className={styles.statistics}>
        <div className={styles.stat}>
          <h1>128</h1>
          <p>
            Discover our collections across 128 countries, bringing our jewelry
            closer to you, wherever you are.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>29K</h1>
          <p>
            Join a community of 29K and counting, where satisfaction meets
            exquisite craftsmanship.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>189+</h1>
          <p>
            Explore a diverse range of 189 unique gemstone varieties, each
            adding its own allure to our collection.
          </p>
        </div>
        <div className={styles.stat}>
          <h1>20+</h1>
          <p>
            We proudly support 20+ artisan communities worldwide, fostering
            craftsmanship and empowerment.
          </p>
        </div>
      </div>
    </div>
  );
}
