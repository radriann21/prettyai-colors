import { createStore } from "zustand/vanilla";

export type ColorState = {
  color: string;
}

export type ColorActions = {
  setColor: (color:string) => void
}

export type ColorStore = ColorState & ColorActions

export const initColorStore = (): ColorState => {
  return {
    color: '#000000'
  }
}

export const defaultInitState: ColorState = {
  color: '#000000'
}

export const createColorStore = (initState: ColorState = defaultInitState) => {
  return createStore<ColorStore>()((set) => ({
    ...initState,
    setColor: (color) => set({ color })
  }))
}

