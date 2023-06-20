import { useFooterClasses } from "@/template/Footer";

/**
 * Site Footer
 */
export function Footer() {
  const classes = useFooterClasses();

  return (
    <footer className={classes.root}>
      <p>Crux Boiler Plate Components</p>
      <p>&copy; 2023</p>
    </footer>
  );
}
