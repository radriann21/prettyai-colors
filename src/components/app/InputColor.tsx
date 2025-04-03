"use client";
import { useColorStore } from "@/providers/colorStoreProvider";
import { debounce } from "lodash-es";

export const InputColor = () => {
  const setColor = useColorStore((state) => state.setColor);

  const debouncedSetColor = debounce((color: string) => {
    setColor(color);
  }, 200)

  return (
    <label htmlFor="color" className="w-fit flex items-center space-x-1 border-[1px] rounded-md border-slate-400 py-1 px-3">
      <input
        type="color"
        id="color"
        onChange={(evt) => debouncedSetColor(evt.target.value)}
      />
      <span className="font-semibold text-sm">Choose a color</span>
    </label>
  );
};
