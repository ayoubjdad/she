import React from "react";
import styles from "./OffersSection.module.scss";

export default function OffersSection() {
  return (
    <div className={styles.main}>
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF <Icon />
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF <Icon />
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF <Icon />
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF <Icon />
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF <Icon />
      BLACK FRIDAY SALE: 30% OFF <Icon /> BLACK FRIDAY SALE: 30% OFF
    </div>
  );
}

const Icon = () => <i className={`fi fi-bs-medical-star ${styles.icon}`} />;
