import { colors } from "@/theme/color";
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
