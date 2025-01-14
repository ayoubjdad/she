import { createTheme } from "@mui/material/styles";

export const palette = {
  cream: "#fffcf0",
  green: "#c8d6b4",
  brown: "#291f1e",
};

export const theme = createTheme({
  typography: {
    fontFamily: "Rolleston Title",
    // fontFamily: "'Core Sans AR45', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
  },
  components: {
    // * Chip
    MuiChip: {
      styleOverrides: {
        root: {
          height: "20px",
          cursor: "pointer",
          width: "fit-content",
          color: palette.cream,
          backgroundColor: "transparent",
          transition: "all 0.3s ease-in-out",
          border: `1px solid ${palette.cream}`,
          "&:hover": {
            color: palette.brown,
            backgroundColor: palette.cream,
          },
        },
        label: {
          lineHeight: 1,
          fontSize: "12px",
          paddingLeft: "6px",
          paddingRight: "6px",
        },
      },
    },

    // * Button
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "#fffcf0",
          padding: "8px 16px",
          width: "fit-content",
          borderRadius: "50px",
          textTransform: "none",
          minWidth: "fit-content",
          backgroundColor: "#291f1e",
          "&:hover": {
            backgroundColor: "#3a2c2b",
          },
        },
      },
    },

    // * TextField
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "50%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#291f1e",
          },
        },
        input: {
          fontFamily: "Core Sans AR45",
          padding: "12px",
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          gap: "8px",
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },

    // * Radio
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          color: palette.brown,
          "&.Mui-checked": {
            color: palette.brown,
          },
          "&.Mui-checked + .MuiFormControlLabel-label": {
            color: palette.brown,
          },
        },
      },
    },

    // * Checkbox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: palette.brown,
          "&.Mui-checked": {
            color: palette.brown,
          },
          "&.Mui-checked + .MuiFormControlLabel-label": {
            color: palette.brown,
          },
        },
      },
    },

    // *  Drawer
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 320,
          padding: "16px",
          boxShadow: "none",
          color: palette.brown,
          backgroundColor: palette.cream,
        },
      },
    },
  },
});
