import { createStore } from "zustand/vanilla";
import { generatePalette } from "@/utils/generatePalette";

export type ColorState = {
  color: string;
  colors: string[]
}

export type ColorActions = {
  setColor: (color:string) => void
}

export type ColorStore = ColorState & ColorActions

export const initColorStore = (): ColorState => {
  return {
    color: '#000000',
    colors: []
  }
}

export const defaultInitState: ColorState = {
  color: '#000000',
  colors: []
}

export const createColorStore = (initState: ColorState = defaultInitState) => {
  return createStore<ColorStore>()((set) => ({
    ...initState,
    setColor: (color) => set(() => {
      const colors = generatePalette(color)
      return {
        color,
        colors
      }
    })
  }))
}

