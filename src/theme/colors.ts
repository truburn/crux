import chroma from "chroma-js";
import type { MyTheme } from "@/theme";

/**
 * Change these colors to define the theme colors
 */
const mainColors: Record<string, string> = {
  background: "#e0f6fa",
  text: "#2f4858",
  primary: "#671d0f",
  secondary: "#0f5967",
  error: "#eb0502",
  warning: "#ec8026",
  success: "#1ebc1e",
  info: "#1eb2ce",
};

/*************************************************
 ********** DO NOT EDIT BELOW THIS LINE **********
 *************************************************/
export type ThemeColor = string | chroma.Color;

export interface ColorVariations {
  name: string;
  chromaColor: chroma.Color;
  main: string;
  inverse: string;
  light: string;
  dark: string;
}

/**
 * Convert the selected colors into variations for the theme
 */
export const colorVariations: MyTheme["colors"] = Object.fromEntries(
  Object.entries(mainColors).map(([name, color]) => {
    const chromaColor = chroma(color);
    const isLight = chromaColor.luminance() > 0.5;
    const dark = chromaColor.darken(2);
    const light = chromaColor.brighten(2).desaturate(0.5);

    return [
      name,
      {
        name,
        chromaColor,
        main: chromaColor.hex(),
        inverse: (isLight
          ? chromaColor.darken(4)
          : chromaColor.brighten(4).desaturate(0.5)
        ).hex(),
        dark: dark.hex(),
        light: light.hex(),
      },
    ];
  })
);

/**
 * Change the opacity of a color
 */
export function colorOpacity(color: ThemeColor, percent: number): string {
  let alphaValue = percent / 100;
  if (alphaValue > 1) alphaValue = 1;
  if (alphaValue < 0) alphaValue = 0;
  const rgba = chroma(color).alpha(alphaValue).rgba().join(", ");

  return `rgba(${rgba})`;
}
