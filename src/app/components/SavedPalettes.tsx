"use client";
import { EmptyState } from "./EmptyState";
import { useColorStore } from "@/providers/colorStoreProvider";
import { ColorItem } from "./ColorItem";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Copy, Trash } from "lucide-react";

export const SavedPalettes = () => {
  const palettes = useColorStore((state) => state.palettes);
  const deletePalette = useColorStore((state) => state.deletePalette);

  return (
    <div className="w-full md:w-9/12 lg:w-1/2 p-4 rounded-md border-[1px] border-slate-300 h-full overflow-hidden">
      <h2 className="font-montserrat text-lg font-bold">Saved Palettes</h2>
      <div className="flex flex-col h-full overflow-scroll py-2">
        {palettes.length === 0 ? (
          <EmptyState />
        ) : (
          palettes.map((palette, index) => (
            <div key={index} className="flex justify-between items-center my-4">
              <div className="flex items-center">
                {palette.map((color, index) => (
                  <ColorItem
                    key={index}
                    color={color}
                    width="w-16"
                    height="h-16"
                  />
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    copyToClipboard(palette.join(","), "Palette copied!")
                  }
                  className="btn font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-neutral-800"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deletePalette(index)}
                  className="btn font-semibold bg-red-500 text-white w-fit rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-neutral-800"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
