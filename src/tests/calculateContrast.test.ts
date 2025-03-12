import { describe, it, expect } from "vitest";
import { calculateContrast } from "../utils/calculateContrast";

describe("calculateContrast", () => {
  it("should return black (#000000) for light colors", () => {
    const lightColors = [
      "#FFFFFF", 
      "#F0F8FF", 
      "#FFFFE0", 
      "#ADD8E6", 
    ]

    lightColors.forEach((color) => {
      expect(calculateContrast(color)).toBe("#000000");
    })
  })

  it("should return white (#FFFFFF) for dark colors", () => {
    const darkColors = [
      "#000000", 
      "#1C1C1C", 
      "#00008B", 
      "#8B0000", 
    ]

    darkColors.forEach((color) => {
      expect(calculateContrast(color)).toBe("#FFFFFF");
    })
  })
  it("should return the correct contrast color for intermediate colors", () => {
    const intermediateColors = [
      { color: "#778899", expected: "#000000" },
      { color: "#4682B4", expected: "#FFFFFF" },
      { color: "#FFA500", expected: "#000000" },
      { color: "#800080", expected: "#FFFFFF" },
    ]

    intermediateColors.forEach(({ color, expected }) => {
      expect(calculateContrast(color)).toBe(expected);
    })
  })

  it("should handle invalid hex colors gracefully", () => {
    const invalidColors = [
      "#ZZZZZZ", 
      "#123",    
      "INVALID", 
    ]

    invalidColors.forEach((color) => {
      expect(() => calculateContrast(color as string)).toThrowError();
    })
  })
})