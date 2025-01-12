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
        },
        input: {
          fontFamily: "Core Sans AR45",
          padding: "12px",
        },
      },
    },
  },
});
