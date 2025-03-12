"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import toast from "react-hot-toast"
import { Copy, Save } from "lucide-react"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { ColorItem } from "./ColorItem"

export const DisplayPalette = () => {
  const colors = useColorStore((state) => state.colors)
  const savePalette = useColorStore((state) => state.savePalette)
  
  if (colors.length === 0) return (
    <h3 className="text-lg font-semibold mt-8">Select a mode for generate the palette.</h3>
  )

  const handleSavePalette = () => {
    if (colors.length === 0) return
    savePalette(colors)
    toast('Palette saved!', {
      duration: 2000,
      position: 'bottom-right',
      style: {
        color: 'white',
        backgroundColor: 'green'
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'assertive'
      }
    })
  }

  return (
    <section className="mt-6 flex flex-col">
      <div className="flex items-center overflow-x-scroll sm:overflow-x-visible">
        {
          colors.map((color, index) => (
            <ColorItem key={index} color={color} width="w-16 sm:w-24" height="h-16 sm:h-24" />
          ))
        }
      </div>

      <div className="flex items-center space-x-4 mt-6 sm:mt-10">
        <button onClick={() => copyToClipboard(colors.join(","), 'Palette copied!')} className="btn px-4 py-2 font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer inline-flex items-center transition-colors duration-200 hover:bg-neutral-800">
          Copy palette
          <Copy className="w-4 h-4 ml-2" />
        </button>
        <button onClick={handleSavePalette} className="btn px-4 py-2 font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer inline-flex items-center transition-colors duration-200 hover:bg-neutral-800">
          Save palette
          <Save className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  )
}