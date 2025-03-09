"use client"
import { useColorStore } from "@/providers/colorStoreProvider"

export const InputColor = () => {
  const color = useColorStore((state) => state.color)
  const colors = useColorStore((state) => state.colors)
  const setColor = useColorStore((state) => state.setColor)

  console.log(colors)

  return (
    <label htmlFor="color" className="flex items-center space-x-1 border-[1px] rounded-md border-slate-400 p-1">
      <input type="color" id="color" value={color} onChange={(evt) => setColor(evt.target.value)} />
      <span className="font-semibold text-sm">Choose a color</span>
    </label>
  )
}
