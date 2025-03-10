"use client";
import { EmptyState } from "./EmptyState";
import { useColorStore } from "@/providers/colorStoreProvider";
import { ColorItem } from "./ColorItem";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Copy } from "lucide-react";

export const SavedPalettes = () => {
  const palettes = useColorStore((state) => state.palettes);
  return (
    <div className="w-full md:w-9/12 lg:w-1/2 p-4 rounded-md border-[1px] border-slate-300 h-full overflow-hidden">
      <h2 className="font-montserrat text-lg font-bold">Saved Palettes</h2>
      <div className="flex flex-col h-full overflow-auto mt-4">
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
              <button
                onClick={() =>
                  copyToClipboard(palette.join(","), "Palette copied!")
                }
                className="btn font-semibold bg-neutral-900 text-white w-fit rounded-md text-sm cursor-pointer inline-flex items-center transition-colors duration-200 hover:bg-neutral-800"
              >
                <Copy className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
