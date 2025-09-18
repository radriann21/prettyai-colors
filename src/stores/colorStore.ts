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
  deletePalette: (index: number) => void
  setAIPalette: (colors: string[]) => void
  setAIColor: (color: string) => void
  deleteAllPalettes: () => void
  updateColorAtIndex: (index: number, color: string) => void
}

export type ColorStore = ColorState & ColorActions

export const initColorStore = (): ColorState => {
  return {
    color: '#000000',
    colors: ["#3B82F6", "#06B6D4", "#10B981", "#84CC16", "#F59E0B", "#F97316"],
    palettes: []
  }
}

export const defaultInitState: ColorState = {
  color: '#000000',
  colors: ["#3B82F6", "#06B6D4", "#10B981", "#84CC16", "#F59E0B", "#F97316"],
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
        }),
        deletePalette: (index) => set((state) => {
          return {
            palettes: state.palettes.filter((_, i) => i !== index)
          }
        }),
        setAIPalette: (colors) => set(() => {
          return {
            colors
          }
        }),
        setAIColor: (color) => set(() => {
          return {
            color
          }
        }),
        deleteAllPalettes: () => set(() => {
          return {
            palettes: []
          }
        }),
        updateColorAtIndex: (index, color) => set((state) => {
          return {
            colors: state.colors.map((c, i) => (i === index ? color : c))
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
