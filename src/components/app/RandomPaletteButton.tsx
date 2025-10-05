"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"

export const RandomPaletteButton = () => {

  const setRandomPalette = useColorStore((state) => state.setRandomPalette)

  return (
    <Button onClick={setRandomPalette} className="px-4 py-2 font-semibold bg-[#D76C38] text-white w-fit rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-[#E85A2B]">
      Random Palette
      <Repeat />
    </Button>
  )
}