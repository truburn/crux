import { Outlet } from "react-router-dom";
import { useLayoutClasses } from "@/template/Layout";
import { Footer } from "@/template/Footer";
import { Header } from "@/template/Header";
import { Navigation } from "@/template/Navigation";
import { Container } from "@/elements/Container";

/**
 * Site Layout Wrapper
 */
export function Layout() {
  const classes = useLayoutClasses();

  return (
    <>
      <Header />
      <Container className={classes.wrapper}>
        <Navigation />
        <Container className={classes.content}>
          <Outlet />
        </Container>
      </Container>
      <Footer />
    </>
  );
}
