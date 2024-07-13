"use client";

import React from "react";
import styles from "./Checkbox.module.scss";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, ThemeProvider } from "@mui/material";
import theme from "../../theme/overrides";

const UncheckedIcon = () => <div className={styles.uncheckedIcon} />;
const CheckedIcon = () => (
  <i className={`fi fi-br-check ${styles.checkedIcon}`} />
);

export default function CustomCheckbox({
  label,
  value,
  setValue = () => {},
  isDisabled,
}) {
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple
            icon={<UncheckedIcon />}
            checkedIcon={<CheckedIcon />}
            inputProps={{ "aria-label": "Checkbox demo" }}
            checked={value}
            onChange={onChange}
            disabled={isDisabled}
          />
        }
        label={label}
      />
    </ThemeProvider>
  );
}
