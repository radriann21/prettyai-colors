"use client"
import { useColorStore } from "@/providers/colorStoreProvider"

export const InputColor = () => {
  const color = useColorStore((state) => state.color)
  const setColor = useColorStore((state) => state.setColor)

  return (
    <section className="flex items-center justify-center mt-12">
      <label htmlFor="color" className="flex items-center space-x-2">
        <input type="color" id="color" value={color} onChange={(evt) => setColor(evt.target.value)} />
        <span>Choose a color</span>
        <span>{color}</span>
      </label>
    </section>
  )
}
