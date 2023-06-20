import { useHeaderClasses } from "@/template/Header";
import { Container } from "@/elements/Container";
import CruxKey from "@/assets/Crux_Key.png";

/**
 * Site Header
 */
export function Header() {
  const classes = useHeaderClasses();

  return (
    <header className={classes.root}>
      <Container className={classes.titleImage}>
        <img src={CruxKey} className={classes.logo} alt="Logo image" />
        Crux Component Library
      </Container>
    </header>
  );
}
