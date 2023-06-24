import chroma from "chroma-js";
import { ColorVariations } from "@/theme/color";

export const colorVariations = (color: string): ColorVariations => {
  const chromaColor = chroma(color);
  const isLight = chromaColor.luminance() > 0.5;
  const contrast = isLight
    ? chromaColor.desaturate(4)
    : chromaColor.saturate(4);

  return {
    chromaColor,
    main: chromaColor.hex(),
    contrast: contrast.hex(),
    dark: chromaColor.desaturate(2).hex(),
    light: chromaColor.saturate(2).hex(),
    border: contrast.desaturate(3).hex(),
  };
};
