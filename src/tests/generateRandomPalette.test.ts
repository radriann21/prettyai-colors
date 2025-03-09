import { describe, test, expect } from "vitest"
import { generateRandomPalette } from "../utils/generateRandomPalette"

describe('generateRandomPalette', () => {
  test('should return an object with color and colors properties', () => {
    const palette = generateRandomPalette()
    expect(palette).toHaveProperty('color')
    expect(palette).toHaveProperty('colors')
  })

  test('should return an array of five elements', () => {
    const palette = generateRandomPalette()
    expect(palette.colors).toHaveLength(5)
  })

  test('should return valid hex colors', () => {
    const palette = generateRandomPalette()
    palette.colors.forEach(color => {
      expect(color).toMatch(/^#([A-Fa-f0-9]{6})$/)
    })
  })
})