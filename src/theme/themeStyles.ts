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

export const theme = {
  base: "light",
  color: "#098765", // temporary for setup
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
