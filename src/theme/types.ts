import { ColorVariations } from "@/theme/color";

export interface MyTheme {
  color: string;
  colors: Record<string, ColorVariations>;
  fonts: Record<string, ThemeFont>;
  fontFamilies: Record<string, FontFamily>;
  separator: {
    width: number;
    color: string;
  };
}

export interface ThemeFont {
  fontFamily: string;
  fontWeight: number;
}

export interface FontFamily {
  family: string;
  weights: Record<string, number>;
}
