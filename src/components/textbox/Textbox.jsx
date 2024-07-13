import React from "react";
import styles from "./Textbox.module.scss";

export default function Textbox({
  type = "text",
  defaultValue,
  setValue,
  startIcon,
  endIcon,

  // * styles
  sx,
}) {
  return (
    <div className={`${styles.container}`} style={{ sx }}>
      {startIcon}
      <input
        type={type}
        defaultValue={defaultValue}
        //   onChange={(e) => setValue(e.target.value)}
        //   className={`${styles.container} ${!value && styles.iconButton} ${
        //     outlined && styles.outlined
        //   }`}
      />
      {endIcon}
    </div>
  );
}
