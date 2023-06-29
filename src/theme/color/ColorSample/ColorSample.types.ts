import { ColorNames } from "@/theme/color";

export interface ColorSampleProps {
  /** List of colors to display. If undefined, all colors will display. */
  colorList?: ColorNames[];
  /** Display a table with variant text and background combinations. */
  showDetails?: boolean;
  /** Only display blocks of the main variant of the selected colors */
  mainColorsOnly?: boolean;
}

export interface ColorItem {
  name: string;
  color: string;
  variations: Omit<ColorItem, "variations">[];
}
