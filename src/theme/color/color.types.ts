import chroma from "chroma-js";

export type Color = string | chroma.Color;

export interface ColorVariations {
  chromaColor: chroma.Color;
  main: string;
  contrast: string;
  dark: string;
  light: string;
  border: string;
}