import React from "react";
import styles from "./Product.module.scss";
import { Button, Chip } from "@mui/material";
import { Product as SingleProduct } from "../../components/product/Product";
import { useLocation, useNavigate } from "react-router";
import { products } from "../../data/data";
import { useCart } from "../../context/CartProvider";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();

  const { product = {} } = location.state || {};

  if (!product) {
    return <p>No product data available.</p>;
  }

  const recommendations = products.filter(
    (pro) => pro.category === product.category
  );

  const goToHome = () => navigate("/");

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Chip
          label={
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <i className="fi fi-rr-arrow-left" /> Back to Home
            </div>
          }
          style={{
            color: "#291f1e",
            borderColor: "#291f1e",
            cursor: "pointer",
          }}
          onClick={goToHome} // Handle click to redirect
        />

        <div className={styles.product}>
          <Details product={product} />
          <AddToCart product={product} addToCart={addToCart} />
        </div>

        <div className={styles.divider} />

        <h1>Recommendations</h1>
        <div className={styles.products}>
          {recommendations.slice(0, 4).map((product) => (
            <SingleProduct product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Details = ({ product }) => {
  const { image, description } = product;

  return (
    <div className={styles.details}>
      <div className={styles.images}>
        <div style={{ backgroundImage: `url(${image})` }} />
        <div className={styles.smallImages}>
          <div style={{ backgroundImage: `url(${image})` }} />
          <div style={{ backgroundImage: `url(${image})` }} />
          <div style={{ backgroundImage: `url(${image})` }} />
        </div>
      </div>

      <h3>Detailed Information</h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
};

const AddToCart = ({ product, setCart, addToCart = () => {} }) => {
  const { id, name, material, price } = product;
  const chipStyle = { color: "#291f1e", borderColor: "#291f1e" };

  return (
    <div className={styles.addToCart}>
      <Chip label="New Arrival" style={chipStyle} />

      <h1>{name}</h1>
      <p>{price} DH</p>
      <p className={styles.description}>{material}</p>

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

      <Button style={{ width: "100%" }} onClick={() => addToCart(product, 1)}>
        Add to Cart
      </Button>

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
