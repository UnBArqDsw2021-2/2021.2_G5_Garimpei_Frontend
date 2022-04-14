import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FED7D7",
      500: "#DB2F44",
      600: "#9d1b2b",
      700: "#71131f",
    },
    text: {
      900: "#2B2B2B",
    },
    dark: {
      400: "#4b4b4b",
      500: "#2B2B2B",
      700: "#F5F5F5",
    },
    facebook: {
      500: "#2B2B2B",
      600: "#3B5998",
    },
    brown: {
      400: "#64393f",
      500: "#4F2D32",
    },
    light: {
      200: "#F5F5F5",
    },
  },
  shadows: {
    outline: "0 0 0 3px #DB2F44",
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Roboto, sans-serif",
  },
});
