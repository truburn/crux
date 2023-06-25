export interface HeadingProps {
  title: string;
  subtitle?: string;
  classes?: {
    root?: string;
    title?: string;
    subtitle?: string;
  };
  as?: Extract<
    keyof JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
}
