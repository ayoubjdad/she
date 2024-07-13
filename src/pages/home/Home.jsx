import React from "react";
import MainSlide from "../../layouts/main-slide/MainSlide";
import ServicePolicy from "../../layouts/service-policy/ServicePolicy";
import Products from "../../layouts/products/Products";
import Categories from "../../layouts/categories/Categories";

export default function Home() {
  return (
    <>
      <MainSlide />
      <ServicePolicy />
      <Products />
      <Categories />
      <Products />
    </>
  );
}
