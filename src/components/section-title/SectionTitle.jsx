import React from "react";

export default function SectionTitle() {
  return (
    <div
      style={{
        padding: "16px 0 64px 0",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <p style={{ fontSize: "48px" }}>Our Products</p>
      <p style={{ fontSize: "14px" }}>Add our products to weekly lineup</p>
    </div>
  );
}
