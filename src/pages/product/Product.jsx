import React, { useState } from "react";
import styles from "./Product.module.scss";
import { Button, Chip, TextField } from "@mui/material";
import { Product as SingleProduct } from "../../components/product/Product";
import { useLocation, useNavigate } from "react-router";
import { products } from "../../data/data";
import { useCart } from "../../context/CartProvider";
import { useIsMobile } from "../../helpers/functions.helper";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const isMobile = useIsMobile();

  const { product = {} } = location.state || {};

  if (!product) {
    return <p>Aucune donnée de produit disponible.</p>;
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
              <i className="fi fi-rr-arrow-left" /> Retour à l'accueil
            </div>
          }
          style={{
            color: "#231918",
            borderColor: "#231918",
            cursor: "pointer",
            display: isMobile ? "none" : "flex",
          }}
          onClick={goToHome} // Gérer le clic pour rediriger
        />

        <div className={styles.product}>
          <Details product={product} isMobile={isMobile} />
          <AddToCart
            product={product}
            addToCart={addToCart}
            isMobile={isMobile}
          />
        </div>

        <div className={styles.divider} />

        <h1>Recommandations</h1>
        <div className={styles.products}>
          {recommendations.slice(0, 4).map((product) => (
            <SingleProduct product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Details = ({ product, isMobile = false }) => {
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

      {isMobile ? null : (
        <>
          <h3>Informations détaillées</h3>
          <p className={styles.description}>{description}</p>
        </>
      )}
    </div>
  );
};

const AddToCart = ({ product, setCart, isMobile, addToCart = () => {} }) => {
  const { id, name, material, price, image, description } = product;

  const chipStyle = { color: "#231918", borderColor: "#231918" };

  const [shopDetails, setShopDetails] = useState({ quantity: 1, coupon: "" });

  return (
    <div className={styles.addToCart}>
      <Chip label="Nouvelle arrivée" style={chipStyle} />

      <h1>{name}</h1>
      <p>{price} DH</p>
      <p className={styles.description}>{material}</p>

      {!isMobile ? null : (
        <>
          <div className={styles.divider} />
          <h3>Informations détaillées</h3>
          <p className={styles.description}>{description}</p>
        </>
      )}

      <div className={styles.divider} />

      <div className={styles.shopDetails}>
        <div className={styles.shopDetailContainer}>
          <h3>Quantité</h3>
          <TextField
            type="number"
            value={shopDetails.quantity}
            onChange={(e) =>
              setShopDetails({ ...shopDetails, quantity: e.target.value })
            }
            style={{ width: "100%" }}
          />
        </div>

        <div className={styles.shopDetailContainer}>
          <h3>Coupon de réduction</h3>
          <TextField
            value={shopDetails.coupon}
            onChange={(e) => setShopDetails(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <Button
        style={{ width: "100%" }}
        onClick={() => addToCart(product, Number(shopDetails.quantity))}
      >
        Ajouter au panier
      </Button>

      <div className={styles.infos}>
        <i className="fi fi-rs-shield-check" />
        <p>Garantie de 30 jours</p>
        <div className={styles.verticalDivider} />
        <i className="fi fi-rs-box-open" />
        <p>Expédié le 24 décembre 2023</p>
        <div className={styles.verticalDivider} />
        <i className="fi fi-rs-diamond" />
        <p>Bijoux sur commande</p>
      </div>
    </div>
  );
};
