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

const colors = {
  primary: colorVariations("#c20022"),
  secondary: colorVariations("#234875"),
  background: colorVariations("#e0f1ff"),
  text: colorVariations("#2f4858"),
  error: colorVariations("#ec2626"),
  warning: colorVariations("#ec8026"),
  success: colorVariations("#1ebc1e"),
  info: colorVariations("#178d8d"),
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
  seperator: {
    width: 1,
    color: "rgba(0, 0, 0, 0.25)",
  },
};
