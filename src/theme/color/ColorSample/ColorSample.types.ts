import { ColorNames } from "@/theme/color";

export interface ColorSampleProps {
  colorList?: ColorNames[];
  showDetails?: boolean;
}

export interface ColorItem {
  name: string;
  color: string;
  variations: Omit<ColorItem, "variations">[];
}
