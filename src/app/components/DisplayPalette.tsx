"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Copy } from "lucide-react"
import { copyToClipboard } from "@/utils/copyToClipboard"

export const DisplayPalette = () => {
  const colors = useColorStore((state) => state.colors)
  
  if (colors.length === 0) return (
    <h3 className="text-lg font-semibold mt-8">Select a mode for generate the palette.</h3>
  )

  return (
    <section className="mt-6 flex flex-col">
      <div className="flex items-center">
        {
          colors.map((color, index) => (
            <div key={index} className="tooltip" data-tip="Copy">
              <div key={index} onClick={() => copyToClipboard(color, 'Color copied!')} className="relative w-24 h-24 border-[2px] border-transparent transition-all duration-200 hover:border-slate-800 cursor-pointer" style={{ backgroundColor: color }}>
                <span className="absolute -bottom-6 text-sm font-semibold">{color}</span>
              </div>
            </div>
          ))
        }
      </div>
      <button onClick={() => copyToClipboard(colors.join(","), 'Palette copied!')} className="btn mt-10 px-4 py-2 font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer inline-flex items-center transition-colors duration-200 hover:bg-neutral-800">
        Copy palette
        <Copy className="w-4 h-4 ml-2" />
      </button>
    </section>
  )
}