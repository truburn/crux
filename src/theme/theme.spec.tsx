/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderHook } from "@testing-library/react";
import { ThemeProvider } from "@emotion/react";
import { useGlobalStyles, theme } from "@/theme";

function MockThemeWrapper(props: any) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

describe("Theme", () => {
  it("useGlobalStyles generates global styles", () => {
    const { result } = renderHook(() => useGlobalStyles(), {
      wrapper: MockThemeWrapper,
    });
    const { styles, name } = result.current;
    expect(name).toBeDefined();
    expect(styles).toBeDefined();
    expect(
      styles.includes("font-family:'Quicksand', sans-serif;")
    ).toBeTruthy();
    expect(styles.includes("font-weight:400;")).toBeTruthy();
    expect(styles.includes("font-weight:700;")).toBeTruthy();
    expect(styles.includes("background:#e0f6fa;color:#2f4858")).toBeTruthy();
  });

  it("theme defines the correct fonts", () => {
    expect(theme.fonts).toBeDefined();
    expect(theme.fonts.body.fontFamily).toEqual("'Quicksand', sans-serif");
    expect(theme.fonts.body.fontWeight).toEqual(400);
    expect(theme.fonts.heading.fontFamily).toEqual("'Comfortaa', cursive");
    expect(theme.fonts.heading.fontWeight).toEqual(700);
    expect(theme.fonts.code.fontFamily).toEqual("'IBM Plex Mono', monospace");
    expect(theme.fonts.code.fontWeight).toEqual(400);
  });

  it("theme defines the correct colors", () => {
    expect(theme.colors).toBeDefined();
    expect(theme.colors.primary.light).toBeDefined();
    expect(theme.colors.secondary.dark).toBeDefined();
    expect(theme.colors.background.main).toBeDefined();
    expect(theme.colors.text.chromaColor).toBeDefined();
  });
});
