import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";
import { generatePalette } from "@/utils/generatePalette";
import { generateRandomPalette } from "@/utils/generateRandomPalette";

export type ColorState = {
  color: string
  colors: string[]
  palettes: string[][]
}

export type ColorActions = {
  setColor: (color:string) => void
  setRandomPalette: () => void
  savePalette: (colors: string[]) => void
}

export type ColorStore = ColorState & ColorActions

export const initColorStore = (): ColorState => {
  return {
    color: '#000000',
    colors: [],
    palettes: []
  }
}

export const defaultInitState: ColorState = {
  color: '#000000',
  colors: [],
  palettes: []
}

export const createColorStore = (initState: ColorState = defaultInitState) => {
  return createStore<ColorStore>()(
    persist(
      (set) => ({
        ...initState,
        setColor: (color) => set(() => {
          const colors = generatePalette(color)
          return {
            color,
            colors
          }
        }),
        setRandomPalette: () => set(() => {
          const { color, colors } = generateRandomPalette()
          return {
            color,
            colors
          }
        }),
        savePalette: (colors) => set((state) => {
          return {
            palettes: [...state.palettes, colors]
          }
        })
      }),
      {
        name: 'palettes',
        partialize: (state) => ({ palettes: state.palettes })
      }
    )
  )
}
