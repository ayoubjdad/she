import React, { useState } from "react";
import styles from "./Checkout.module.scss";
import { Button, TextField } from "@mui/material";
import { useCart } from "../../context/CartProvider";

export default function Checkout() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    address: "",
    city: "",
  });

  const total = `${
    cart.reduce((total, item) => total + item.price * item.quantity, 0) + 20
  } DH`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailContent = {
      phone: `${formData.phone}`,
      name: `${formData.name}`,
      email: `${formData.email}`,
      address: `${formData.address}`,
      city: `${formData.city}`,
      cart,
      total: `${cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )} DH`,
    };
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit} className={styles.formInfos}>
        <div className={styles.infos}>
          <h3>Numéro de téléphone</h3>
          <TextField
            name="phone"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ width: "100%" }}
          />
          <h3>Livraison</h3>
          <div className={styles.infos}>
            <TextField
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.infos}>
            <TextField
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.address}>
            <TextField
              name="address"
              placeholder="Adresse"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
            <TextField
              name="city"
              placeholder="Ville"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ width: "100%" }}
            />
          </div>
          <h3>Frais de livraison</h3>
          <TextField value="20 DH" disabled style={{ width: "100%" }} />
          <h3>Paiement</h3>
          Paiement à la livraison
          <Button type="submit">Confirmer</Button>
        </div>
      </form>

      <div className={styles.cartContainer}>
        <div className={styles.cart}>
          {cart.map((item, index) => (
            <div key={index} className={styles.cartItem}>
              <img src={item.image} alt="" />
              <div className={styles.cartItemInfos}>
                <span>{item.name}</span>
                <span>
                  {item.quantity} x {item.price} DH
                </span>
              </div>
            </div>
          ))}

          <div className={styles.cartTotal}>
            <h3>Total</h3>
            <div className={styles.infos}>
              <TextField disabled value={total} style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
