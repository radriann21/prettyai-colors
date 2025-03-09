"use client"
import { useColorStore } from "@/providers/colorStoreProvider"

export const DisplayPalette = () => {
  const colors = useColorStore((state) => state.colors)
  
  if (colors.length === 0) return null

  return (
    <section className="mt-6 flex items-center">
      {
        colors.map((color, index) => (
          <div key={index} className="w-24 h-24" style={{ backgroundColor: color }}></div>
        ))
      }
    </section>
  )
}