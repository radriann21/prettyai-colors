"use client"
import { useColorStore } from "@/providers/colorStoreProvider"

export const InputColor = () => {
  const color = useColorStore((state) => state.color)
  const setColor = useColorStore((state) => state.setColor)

  return (
    <label htmlFor="color" className="w-fit flex items-center space-x-1 border-[1px] rounded-md border-slate-400 py-1 px-3">
      <input type="color" id="color" value={color || ''} onChange={(evt) => setColor(evt.target.value)} />
      <span className="font-semibold text-sm">Choose a color</span>
    </label>
  )
}
