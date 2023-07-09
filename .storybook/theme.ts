import { create } from "@storybook/theming/create";
import { theme } from "../src/theme";

export default create({
  base: "light",
  brandTitle: "Crux Boilerplate",
  brandImage: "/Crux_Key.png",
  fontBase: theme.fonts.body.fontFamily,
});
