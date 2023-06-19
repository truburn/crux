export interface ThemeFont {
  fontFamily: string;
  fontWeight?: number;
}

export interface FontFamily {
  family: string;
  weights?: Record<string, number>;
}

export interface MyTheme {
  color?: string;
  fonts?: Record<string, ThemeFont>;
  fontFamilies?: Record<string, FontFamily>;
}
