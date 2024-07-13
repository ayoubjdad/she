import React from "react";
import styles from "./ServicePolicy.module.scss";

export default function ServicePolicy() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Element
          icon={<i className="fi fi-rr-plane" />}
          title="Free Shipping"
          description="Free shipping all order"
        />
        <Element
          icon={<i className="fi fi-rr-user-headset" />}
          title="Support 24/7"
          description="Support 24 hours a day"
        />
        <Element
          icon={<i className="fi fi-rr-hand-holding-usd" />}
          title="Money Return"
          description="30 days for free return"
        />
        <Element
          icon={<i className="fi fi-rr-credit-card" />}
          title="100% Payment Secure"
          description="We ensure secure payment"
        />
      </div>
    </div>
  );
}

const Element = ({ icon, title, description }) => (
  <div className={styles.element}>
    {icon}
    <p className={styles.title}>{title}</p>
    <p className={styles.description}>{description}</p>
  </div>
);
