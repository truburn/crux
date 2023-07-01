import { ReactNode } from "react";

export interface LinkProps {
  /** URL to link to (the `href` props) */
  to: string;
  /** The content of the link to wrap in the `<a>` tag */
  children: ReactNode;
  /** Open the link in a new window/tab */
  external?: boolean;
  /** Additional styling to the link */
  classes?: {
    root?: string;
    externalIcon?: string;
  };
}
