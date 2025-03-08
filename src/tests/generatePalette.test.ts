import { describe, expect, test } from "vitest"
import { generatePalette } from "../utils/generatePalette"

describe("generatePalette", () => {
  test("should return an error because is not color", () => {
    const color = ""
    const palette = generatePalette(color)
    expect(palette).toEqual([])
  })

  test("should return an array of five elements", () => {
    const color = "#ffaffb"
    const palette = generatePalette(color)
    expect(palette).toHaveLength(5)
  })
})