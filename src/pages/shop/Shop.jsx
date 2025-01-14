import React, { useMemo, useState } from "react";
import styles from "./Shop.module.scss";
import {
  Chip,
  Radio,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Product } from "../../components/product/Product";
import { useNavigate } from "react-router";
import { products } from "../../data/data";

export default function Shop() {
  const navigate = useNavigate();

  // const filters {
  //   "sortBy": "priceDescending",
  //   "onlineAvailable": true,
  //   "newArrival": true,
  //   "categories": [
  //       "Jewelry",
  //       "Rings"
  //   ]
  // }

  const [filters, setFilters] = useState({
    sortBy: "recommended",
    onlineAvailable: false,
    newArrival: false,
    categories: [],
  });

  const goToHome = () => navigate("/");

  // Function to filter and sort products
  const getFilteredProducts = () => {
    let filteredProducts = [...products];

    // Filter by availability
    if (filters.onlineAvailable) {
      filteredProducts = filteredProducts.filter(
        (product) => product.onlineAvailable
      );
    }

    // Filter by new arrival
    if (filters.newArrival) {
      filteredProducts = filteredProducts.filter(
        (product) => product.newArrival
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }

    // Sort products
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
              <i className="fi fi-rr-arrow-left" /> Back to Home
            </div>
          }
          style={{ color: "#291f1e", borderColor: "#291f1e" }}
          onClick={goToHome}
        />

        <div className={styles.shop}>
          <Filters filters={filters} setFilters={setFilters} />

          <div className={styles.products}>
            {filteredProducts?.length ? (
              filteredProducts.map((product) => <Product product={product} />)
            ) : (
              <>No products found.</>
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
  const categories = ["Jewelry", "Rings", "Necklaces", "Bracelets", "Earrings"];

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
      <div>
        <h3>Sort By</h3>
        <FormControlLabel
          control={<Radio />}
          label="Recommended"
          value="recommended"
          checked={filters.sortBy === "recommended"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
        <FormControlLabel
          control={<Radio />}
          label="Price Ascending"
          value="priceAscending"
          checked={filters.sortBy === "priceAscending"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
        <FormControlLabel
          control={<Radio />}
          label="Price Descending"
          value="priceDescending"
          checked={filters.sortBy === "priceDescending"}
          onChange={(e) => handleFilterChange("sortBy", e.target.value)}
        />
      </div>

      <div>
        <h3>Filter By</h3>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.onlineAvailable}
                onChange={(e) =>
                  handleFilterChange("onlineAvailable", e.target.checked)
                }
              />
            }
            label="Available Online"
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
            label="New Arrival"
          />
        </FormGroup>
      </div>

      <div>
        <h3>Category</h3>
        <FormGroup>
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
        </FormGroup>
      </div>
    </div>
  );
};
