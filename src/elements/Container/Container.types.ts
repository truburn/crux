import type { ReactNode } from "react";

export interface ContainerProps {
  /** Contents to render inside the container */
  children: ReactNode;
  /** Unique ID of the element */
  id?: string;
  /** Additional class name to override default styles */
  className?: string;
  /** Render the container as a `div`, `span`, or `section` element. Default is `div` */
  as?: Extract<keyof JSX.IntrinsicElements, "div" | "span" | "section">;
}
