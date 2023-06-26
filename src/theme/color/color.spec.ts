import chroma from "chroma-js";
import { colorVariations, colorOpacity } from "@/theme/color";

describe("Color Utilities", () => {
  test("colorVariations method gets variations of a color", () => {
    const generated = colorVariations("#0f5967");
    const expected = {
      chromaColor: chroma("#0f5967"),
      main: "#0f5967",
      contrast: "#f2fafa",
      dark: "#000817",
      light: "#91b2bb",
      border: "#142e37",
    };
    expect(generated).toStrictEqual(expected);
  });

  test("colorOpacity method creates a valid rgba string for css from a hex string", () => {
    const generated = colorOpacity("#000000", 0.5);
    const expected = "rgba(0, 0, 0, 0.5)";
    expect(generated).toEqual(expected);
  });

  test("colorOpacity method creates a valid rgba string for css from a chroma color object", () => {
    const chromaColor = chroma("#000000");
    const generated = colorOpacity(chromaColor, 0.5);
    const expected = "rgba(0, 0, 0, 0.5)";
    expect(generated).toEqual(expected);
  });

  test("colorOpacity method defaults to alpha value of 1 if a number greater than 1 is passed", () => {
    const generated = colorOpacity("#000000", 1.125);
    const expected = "rgba(0, 0, 0, 1)";
    expect(generated).toEqual(expected);
  });

  test("colorOpacity method defaults to alpha value of 0 if number less than 0 is passed", () => {
    const generated = colorOpacity("#000000", -2);
    const expected = "rgba(0, 0, 0, 0)";
    expect(generated).toEqual(expected);
  });
});
