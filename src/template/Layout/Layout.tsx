import { useLayoutClasses } from "@/template/Layout";
import { Footer } from "@/template/Footer";
import { Header } from "@/template/Header";

/**
 * Site Layout Wrapper
 */
export function Layout() {
  const classes = useLayoutClasses();

  return (
    <>
      <Header />
      <div className={classes.content}>Page Content</div>
      <Footer />
    </>
  );
}
