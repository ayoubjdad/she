import React from "react";
import styles from "./Button.module.scss";

export default function Button({
  value,
  outlined = false,
  startIcon,
  endIcon,
}) {
  return (
    <button
      className={`${styles.container} ${!value && styles.iconButton} ${
        outlined && styles.outlined
      }`}
    >
      {startIcon} {value} {endIcon}
    </button>
  );
}
