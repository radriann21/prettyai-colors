"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Repeat } from "lucide-react"

export const RandomPaletteButton = () => {
  
  const setRandomPalette = useColorStore((state) => state.setRandomPalette)

  return (
    <button onClick={setRandomPalette} className="inline-flex items-center text-white bg-neutral-900 text-sm font-semibold px-4 py-2 rounded-md w-fit cursor-pointer transition-colors duration-200 hover:bg-neutral-800">
      Random Palette
      <Repeat className="w-4 h-4 ml-2" />
    </button>
  )
}