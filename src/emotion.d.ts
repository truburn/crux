import "@emotion/react";
import type { MyTheme } from "@/theme/types";

declare module "@emotion/react" {
  export interface Theme extends MyTheme {}
}
