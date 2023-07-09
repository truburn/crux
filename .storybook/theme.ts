import { create } from "@storybook/theming/create";
import { theme } from "../src/theme";

export default create({
  base: "light",
  brandTitle: "Crux Boilerplate",
  brandImage: "/Crux_Key.png",
  fontBase: theme.fonts.body.fontFamily,
  colorPrimary: theme.colors.primary.main,
  colorSecondary: theme.colors.secondary.main,
  appContentBg: theme.colors.background.main,
  textColor: theme.colors.text.main,
  textMutedColor: theme.colors.text.light,
  textInverseColor: theme.colors.text.inverse,
});
