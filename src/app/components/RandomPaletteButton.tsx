"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Repeat } from "lucide-react"

export const RandomPaletteButton = () => {
  
  const setRandomPalette = useColorStore((state) => state.setRandomPalette)

  return (
    <button onClick={setRandomPalette} className="btn px-4 py-2 font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-neutral-800">
      Random Palette
      <Repeat className="w-4 h-4 ml-2" />
    </button>
  )
}