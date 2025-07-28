import React from "react";
import styles from "./BestSeller.module.scss";
import { Button, Chip } from "@mui/material";
import { Product } from "../../components/product/Product";
import { products } from "../../data/data";
import { useNavigate } from "react-router";

export default function BestSeller() {
  const navigate = useNavigate();

  const bestSellerProducts = products
    .filter((product) => product.isBestSeller)
    .slice(0, 4);

  const onClick = () => navigate("/shop");

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Chip
          label="Produit Best Seller"
          style={{ color: "#231918", borderColor: "#231918" }}
        />
        <div className={styles.title}>
          <h1>Fabriqué par des artisans maîtres.</h1>
          <p>
            Habilement fabriqué par des artisans qualifiés, garantissant que
            chaque pièce reflète un véritable savoir-faire.
          </p>
        </div>
        <Button onClick={onClick}>Voir tous les produits</Button>

        <div className={styles.products}>
          {bestSellerProducts.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
