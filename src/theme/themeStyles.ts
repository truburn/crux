import { colorVariations } from "@/theme/color";

const fontFamilies = {
  Quicksand: {
    family: `'Quicksand', sans-serif`,
    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
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

export const theme = {
  color: "blue", // temporary for setup
  colors,
  fonts: {
    body: {
      fontFamily: fontFamilies.Quicksand.family,
      fontWeight: fontFamilies.Quicksand.weights.regular,
    },
    heading: {
      fontFamily: fontFamilies.Quicksand.family,
      fontWeight: fontFamilies.Quicksand.weights.bold,
    },
  },
  fontFamilies,
  separator: {
    width: 1,
    color: colors.text.light,
  },
};
