import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "white",
    100: "#FFD68A",
    200: "#FFC55C",
    300: "#FFB52E",
    400: "#FFA500",
    500: "#ff6910",
    600: "#D18700",
    700: "#A36A00",
    800: "#A36A00",
    900: "#754C00",
  },
};

const textStyles = {
  h1: {
    fontSize: ["2.5rem", "4rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
  h2: {
    fontSize: ["1.7rem", "2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
  h3: {
    fontSize: ["1.2rem", "1.5rem"],
    fontWeight: "bold",
    lineHeight: "105%",
    fontFamily: `'Inter', sans-serif`,
  },
  h4: {
    fontSize: [".8rem", "1.2rem"],
    fontWeight: "bold",
    lineHeight: "100%",
    fontFamily: `'Inter', sans-serif`,
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ colors, textStyles, config });
