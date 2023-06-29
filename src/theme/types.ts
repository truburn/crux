import { ColorVariations } from "@/theme/color";

export interface MyTheme {
  color: string;
  colors: Record<string, ColorVariations>;
  fonts: {
    body: ThemeFont;
    heading: ThemeFont;
    code: ThemeFont;
  };
  fontFamilies: {
    body: FontFamily;
    heading: FontFamily;
    code: FontFamily;
  };
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
