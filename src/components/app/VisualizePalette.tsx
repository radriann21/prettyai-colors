"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Copy, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export const VisualizePalette = () => {
  const colors = useColorStore((state) => state.colors)
  const savePalette = useColorStore((state) => state.savePalette)

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
      .then(() => {
        toast.success("Color copied to clipboard")
      })
  }

  const handleSavePalette = () => {
    savePalette(colors)
    toast('Palette saved!')
  }

  if (colors.length === 0) return null

  return (
    <section className="mt-10 w-[80%] mx-auto xl:w-full text-center transition-all duration-200">
      <div className="flex items-center justify-between w-[60%] mx-auto">
        <h2 className="font-montserrat text-2xl font-bold">Your color palette</h2>
        <Button variant="ghost" className="cursor-pointer bg-transparent" onClick={handleSavePalette}>
          <Save className="w-12 h-12 stroke-black" />
        </Button>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center w-fit mx-auto gap-10">
        {
          colors.map((color, index) => (
            <div key={index} className="relative w-36 h-36 rounded-md transition-colors duration-200" style={{ backgroundColor: color }}>
              <span className="absolute -bottom-6 left-2">{color}</span>
              <Button onClick={() => copyToClipboard(color)} variant="ghost" className="absolute top-2 right-2 cursor-pointer hover:bg-white/60">
                <Copy className="w-5 h-5" />
              </Button>
            </div>
          ))
        }
      </div>
    </section>
  )
} 