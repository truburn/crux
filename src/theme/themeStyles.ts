import { colorVariations } from "@/theme/color";
import { Theme } from "@emotion/react";

const fontFamilies = {
  body: {
    family: `'Quicksand', sans-serif`,
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  heading: {
    family: `'Comfortaa', cursive`,
    weights: {
      light: 300,
      regular: 700,
    },
  },
  code: {
    family: `'IBM Plex Mono', monospace`,
    weights: {
      light: 200,
      regular: 400,
      bold: 700,
    },
  },
};

// Color palette designer https://colordesigner.io/
const colors = {
  primary: colorVariations("#671d0f"),
  secondary: colorVariations("#0f5967"),
  background: colorVariations("#e0f6fa"),
  text: colorVariations("#2f4858"),
  error: colorVariations("#eb0502"),
  warning: colorVariations("#ec8026"),
  success: colorVariations("#1ebc1e"),
  info: colorVariations("#1eb2ce"),
};

export const theme: Theme = {
  color: "blue", // temporary for setup
  colors,
  fonts: {
    body: {
      fontFamily: fontFamilies.body.family,
      fontWeight: fontFamilies.body.weights.regular,
    },
    heading: {
      fontFamily: fontFamilies.heading.family,
      fontWeight: fontFamilies.heading.weights.regular,
    },
    code: {
      fontFamily: fontFamilies.code.family,
      fontWeight: fontFamilies.code.weights.regular,
    },
  },
  fontFamilies,
  separator: {
    width: 1,
    color: colors.text.light,
  },
};
