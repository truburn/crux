import chroma from "chroma-js";
import { ColorVariations, Color } from "@/theme/color";

export function colorVariations(color: string): ColorVariations {
  const chromaColor = chroma(color);
  const isLight = chromaColor.luminance() > 0.5;
  const dark = chromaColor.darken(2);
  const light = chromaColor.brighten(2).desaturate(0.5);

  return {
    chromaColor,
    main: chromaColor.hex(),
    contrast: (isLight
      ? chromaColor.darken(4)
      : chromaColor.brighten(4).desaturate(0.5)
    ).hex(),
    dark: dark.hex(),
    light: light.hex(),
    border: chromaColor.darken(1).desaturate(0.25).hex(),
  };
}

export function colorOpacity(color: Color, opacity: number): string {
  let alphaValue = opacity;
  if (alphaValue > 1) alphaValue = 1;
  if (alphaValue < 0) alphaValue = 0;
  return `rgba(${chroma(color).alpha(alphaValue).rgba().join(", ")})`;
}
