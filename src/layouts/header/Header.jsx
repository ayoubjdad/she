import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Popover } from "@mui/material";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <CustomPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      />
      <div className={styles.header}>
        <div className={styles.container}>
          <img
            alt=""
            className={styles.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          />
          <div className={styles.navLinks}>
            <span onClick={handleClick}>
              Nos bijoux
              {/* <i className={`fi fi-br-angle-small-${open ? "up" : "down"} `} /> */}
            </span>
            <span>Idée cadeaux</span>
            <span>Les plus vendus</span>
            <span className={styles.navLinkDiscount}>Promotions</span>
          </div>
          <div className={styles.icons}>
            {/* <span className={styles.icon}>
              <i className="fi fi-rr-circle-user" />
            </span> */}
            <span className={styles.icon}>
              <i className="fi fi-rr-search" />
            </span>
            <span className={styles.icon}>
              <i className="fi fi-rr-shopping-cart" />
            </span>
            <span className={`${styles.icon} ${styles.menuIcon}`}>
              <i className="fi fi-rr-menu-burger" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const CustomPopover = ({ id, open, anchorEl, handleClose }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      sx={{
        "& .MuiPopover-paper": {
          backgroundColor: "#f1f3e4",
          padding: "16px",
          boxShadow: "none",
          // borderRadius: "0px",
          top: "54px !important",
          borderRadius: "12px",
        },
      }}
    >
      <li>
        <ul style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          Colliers
          <span
            style={{
              fontSize: "8px",
              backgroundColor: "#e9e9e9",
              border: "1px solid #000000",
              color: "#000000",
              padding: "1px 4px",
              borderRadius: "60px",
            }}
          >
            Nouveau
          </span>
        </ul>
        <ul>Bracelets</ul>
        <ul>Bagues</ul>
        <ul>Boucles d&apos;oreilles</ul>
        <ul>Chaines de cheville</ul>
      </li>
    </Popover>
  );
};
