"use client";
import { useColorStore } from "@/providers/colorStoreProvider";
import { useCallback } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Save, Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { PaletteInfo } from "./PaletteInfo";

export const ShowcasePalette = () => {
  const { colors, savePalette } = useColorStore((state) => state);

  const handleSavePalette = useCallback(() => {
    savePalette(colors);
    toast("Palette saved!");
  }, [colors, savePalette]);

  return (
    <section className="w-full col-span-1 p-4 rounded-md shadow-md bg-[#FFF8E9] relative">
      {colors.length === 0 ? (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
          <p className="text-slate-600">No colors added yet</p>
        </div>
      ) : (
        <>
          <div className="w-full flex items-center justify-between">
            <h2 className="font-bold text-lg font-montserrat">
              Showcase Palette
            </h2>
            <div className="flex items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      onClick={handleSavePalette}
                      className="bg-transparent text-black cursor-pointer"
                    >
                      <Save className="w-12 h-12 stroke-black" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Save palette</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      onClick={() =>
                        copyToClipboard(colors.join(","), "Palette copied!")
                      }
                      className="bg-transparent text-black cursor-pointer"
                    >
                      <Copy className="w-12 h-12 stroke-black" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Copy palette</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="mt-2 rounded-md">
            <PaletteInfo colors={colors} />
          </div>
        </>
      )}
    </section>
  );
};
