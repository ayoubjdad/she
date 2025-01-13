import React from "react";
import styles from "./Product.module.scss";
import { Button, Chip } from "@mui/material";
import { Product as SingleProduct } from "../../layouts/best-seller/BestSeller";

export default function Product() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Chip
          label={
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <i className="fi fi-rr-arrow-left" /> Back to Home
            </div>
          }
          style={{ color: "#291f1e", borderColor: "#291f1e" }}
        />

        <div className={styles.product}>
          <Details />
          <AddToCart />
        </div>

        <div className={styles.divider} />

        <h1>Recommendations</h1>
        <div className={styles.products}>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </div>
  );
}

const Details = ({ title, price, image }) => {
  return (
    <div className={styles.details}>
      <div className={styles.images}>
        <div
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg)",
          }}
        />
        <div className={styles.smallImages}>
          <div
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg)",
            }}
          />
          <div
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg)",
            }}
          />
          <div
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/736x/d2/4a/ac/d24aacaaabb9d0ace6a9f8e0f39b186e.jpg)",
            }}
          />
        </div>
      </div>

      <h3>Detailed Information</h3>

      <p className={styles.description}>
        Experience sophistication and expert craftsmanship with our Sorrowela
        Earrings. Crafted from solid 14k gold, each pair offers a choice of a
        sleek 2.00 mm width and a substantial 1.60 mm thickness. Available in
        yellow, white, or rose gold, these earrings exude timeless elegance
        tailored to your style. Elevate every moment with the enduring beauty
        and meticulous craftsmanship embodied in our Sorrowela Earrings.
      </p>
      <p className={styles.description}>
        Crafted from solid 14k gold in yellow,1.60 mm thickness. Available in
        yellow, white, or rose gold, these earrings exude timeless elegance
        tailored to your style. Elevate every moment with the enduring beauty
        and meticulous craftsmanship embodied in our Sorrowela Earrings. white,
        or rose hues, exuding timeless elegance and these earrings elevate your
        style.
      </p>
      <p className={styles.description}>
        Crafted from sol1.yle. Elevate every moment with the enduring beauty and
        meticulous craftsmanship embodied in our Sorrowela Earrings.id 14k gold
        in yellow, white, or rose hues, exuding timeless elegance and these
        earrings elevate your style.
      </p>
    </div>
  );
};

const AddToCart = () => {
  const chipStyle = {
    color: "#291f1e",
    borderColor: "#291f1e",
  };

  return (
    <div className={styles.addToCart}>
      <Chip label="New Arrival" style={chipStyle} />

      <h1>Sorrowela Earrings</h1>
      <p>218 DH</p>
      <p className={styles.description}>
        Crafted from solid 14k gold in yellow, white, or rose hues, exuding
        timeless elegance and these earrings elevate your style.
      </p>

      <div className={styles.divider} />

      <div style={{ display: "grid", gap: "16px" }}>
        <h3>Color*</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <Chip label="Yellow" style={chipStyle} />
          <Chip label="White" style={chipStyle} />
          <Chip label="Rose Gold" style={chipStyle} />
        </div>
      </div>

      <div style={{ display: "grid", gap: "16px" }}>
        <h3>Style*</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <Chip label="Yellow" style={chipStyle} />
          <Chip label="White" style={chipStyle} />
          <Chip label="Rose Gold" style={chipStyle} />
          <Chip label="White" style={chipStyle} />
          <Chip label="Rose Gold" style={chipStyle} />
        </div>
      </div>

      <Button style={{ width: "100%" }}>Add to Cart</Button>

      <div className={styles.infos}>
        <i className="fi fi-rs-shield-check" />
        <p>Guarantee for 30 days</p>
        <div className={styles.verticalDivider} />
        <i className="fi fi-rs-box-open" />
        <p>Shipped on Dec 24, 2023</p>
        <div className={styles.verticalDivider} />
        <i className="fi fi-rs-diamond" />
        <p>Made-to-order jewelry</p>
      </div>
    </div>
  );
};
