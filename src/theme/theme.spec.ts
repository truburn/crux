import { renderHook } from "@testing-library/react";
import { useGlobalStyles } from "@/theme";

describe("Theme", () => {
  it("useGlobalStyles generates global styles", () => {
    const { result } = renderHook(() => useGlobalStyles());
    expect(result.name).toBeDefined();
    expect(result.styles).toBeDefined();
    expect(
      result.styles.includes("font-family:'Quicksand', sans-serif;")
    ).toBeTruthy();
    expect(result.styles.includes("font-weight:400;")).toBeTruthy();
  });
});
