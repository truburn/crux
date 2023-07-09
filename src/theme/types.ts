import type { ColorVariations } from "@/theme/colors";

export interface MyTheme {
  colors: Record<string, ColorVariations>;
  fonts: Record<string, ThemeFont>;
  fontFamilies?: Record<string, FontFamily>;
}

export interface ThemeFont {
  fontFamily: string;
  fontWeight: number;
}

export interface FontFamily {
  family: string;
  weights?: Record<string, number>;
}
