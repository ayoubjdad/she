"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "blue",
          "&.Mui-checked": {
            borderRadius: "60px",
            color: "green",
          },
          "&.Mui-disabled": {
            color: "grey",
          },
        },
      },
    },
  },
});

export default theme;
