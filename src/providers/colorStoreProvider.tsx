"use client"
import { type ReactNode, createContext, useRef, useContext } from "react"
import { useStore } from "zustand"

import { type ColorStore, createColorStore, initColorStore } from "@/stores/colorStore"

export type ColorStoreApi = ReturnType<typeof createColorStore>

export const ColorStoreContext = createContext<ColorStoreApi | null>(null)

export interface ColorStoreProviderProps {
  children: ReactNode
}

export const ColorStoreProvider = ({ children }: ColorStoreProviderProps) => {
  const storeRef = useRef<ColorStoreApi>(null)
  if (!storeRef.current) {
    storeRef.current = createColorStore(initColorStore())
  }

  return (
    <ColorStoreContext.Provider value={storeRef.current}>
      {children}
    </ColorStoreContext.Provider>
  )
}

export const useColorStore = <T,>(selector: (store: ColorStore) => T,): T => {
  const colorStoreContext = useContext(ColorStoreContext)
  if (!colorStoreContext) {
    throw new Error('ColorStoreContext is not available')
  }
  return useStore(colorStoreContext, selector)
}
