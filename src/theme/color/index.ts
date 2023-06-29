import { colorVariations } from "./color.utils";

export * from "./color.types";
export * from "./color.utils";

// Color palette designer https://colordesigner.io/
export const colors = {
  primary: colorVariations("#671d0f"),
  secondary: colorVariations("#0f5967"),
  background: colorVariations("#e0f6fa"),
  text: colorVariations("#2f4858"),
  error: colorVariations("#eb0502"),
  warning: colorVariations("#ec8026"),
  success: colorVariations("#1ebc1e"),
  info: colorVariations("#1eb2ce"),
};
