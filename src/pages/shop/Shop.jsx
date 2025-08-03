import React, { useState } from "react";
import styles from "./Shop.module.scss";
import {
  Chip,
  Radio,
  Checkbox,
  FormControlLabel,
  Drawer,
  Box,
  Button,
  Divider,
} from "@mui/material";
import { Product } from "../../components/product/Product";
import { useNavigate } from "react-router";
import { useIsMobile } from "../../helpers/functions.helper";
import { products } from "../../data/data";

export default function Shop({ isPromotion = false }) {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    sortBy: "recommended",
    onlineAvailable: false,
    newArrival: false,
    categories: [],
  });
  const isMobile = useIsMobile();
  const [openFilters, setOpenFilters] = useState(false);

  const goToHome = () => navigate("/");

  // Fonction pour filtrer et trier les produits
  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    if (isPromotion) {
      filteredProducts = filteredProducts.filter(
        (product) => product.promoPrice
      );
    }

    // Filtrer par disponibilité
    if (filters.onlineAvailable) {
      filteredProducts = filteredProducts.filter(
        (product) => product.onlineAvailable
      );
    }

    // Filtrer par nouveauté
    if (filters.newArrival) {
      filteredProducts = filteredProducts.filter(
        (product) => product.newArrival
      );
    }

    // Filtrer par catégories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Trier les produits
    if (filters.sortBy === "priceAscending") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "priceDescending") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

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
            display: isMobile ? "none" : "flex",
          }}
          onClick={goToHome}
        />

        <div className={styles.shop}>
          {isMobile ? (
            <>
              <Chip
                label={
                  <div
                    style={{ gap: 8, display: "flex", alignItems: "center" }}
                  >
                    <i className="fi fi-rr-filter" />
                    <span>Filtres</span>
                  </div>
                }
                style={{ color: "#231918", borderColor: "#231918" }}
                onClick={() => setOpenFilters(true)}
              />

              <Drawer
                anchor="left"
                open={openFilters}
                onClose={() => setOpenFilters(false)}
              >
                <Box sx={{ width: 260, p: 2 }}>
                  <Box
                    sx={{
                      mb: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2>Filtres</h2>
                    <Box
                      component="i"
                      className="fi fi-bs-cross"
                      onClick={() => setOpenFilters(false)}
                      sx={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Divider sx={{ mb: 2 }} />
                  <Filters filters={filters} setFilters={setFilters} />
                </Box>
              </Drawer>
            </>
          ) : (
            <Filters filters={filters} setFilters={setFilters} />
          )}

          <div className={styles.products}>
            {filteredProducts?.length ? (
              filteredProducts.map((product) => <Product product={product} />)
            ) : (
              <>Aucun produit trouvé.</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Filters = ({
  filters,
  setFilters = () => {},
  onFilterChange = () => {},
}) => {
  const categories = [
    "Bijoux",
    "Bagues",
    "Colliers",
    "Bracelets",
    "Boucles d'oreilles",
  ];

  const handleFilterChange = (key, value) => {
    if (key === "categories") {
      const updatedCategories = filters.categories.includes(value)
        ? filters.categories.filter((category) => category !== value)
        : [...filters.categories, value];
      setFilters({ ...filters, categories: updatedCategories });
      onFilterChange({ ...filters, categories: updatedCategories });
    } else {
      const updatedFilters = { ...filters, [key]: value };
      setFilters(updatedFilters);
      onFilterChange(updatedFilters);
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <h3>Trier par</h3>
        <FormControlLabel
          control={<Radio />}
          label="Recommandé"
          value="recommended"
          checked={filters.sortBy === "recommended"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
        <FormControlLabel
          control={<Radio />}
          label="Prix Croissant"
          value="priceAscending"
          checked={filters.sortBy === "priceAscending"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
        <FormControlLabel
          control={<Radio />}
          label="Prix Décroissant"
          value="priceDescending"
          checked={filters.sortBy === "priceDescending"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <h3>Filtrer par</h3>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.onlineAvailable}
              onChange={(e) =>
                handleFilterChange("onlineAvailable", e.target.checked)
              }
            />
          }
          label="Disponible"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.newArrival}
              onChange={(e) =>
                handleFilterChange("newArrival", e.target.checked)
              }
            />
          }
          label="Nouveauté"
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.group}>
        <h3>Catégorie</h3>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={filters.categories.includes(category)}
                onChange={() => handleFilterChange("categories", category)}
              />
            }
            label={category}
          />
        ))}
      </div>
    </div>
  );
};
