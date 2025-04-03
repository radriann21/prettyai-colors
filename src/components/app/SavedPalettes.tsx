"use client";
import { useColorStore } from "@/providers/colorStoreProvider";
import { Button } from "@/components/ui/button";
import { Trash, Copy } from "lucide-react";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Toaster } from "@/components/ui/sonner";
import { motion, AnimatePresence } from "motion/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const SavedPalettes = () => {
  const { palettes, deletePalette, deleteAllPalettes } = useColorStore((state) => state);

  return (
    <>
      <Toaster />
      <section className="w-full px-10">
        <div className="w-full flex items-center justify-between">
          <h2 className="font-montserrat text-3xl font-bold">Saved palettes</h2>
          <Button className="bg-red-500 transition-colors duration-200 cursor-pointer hover:bg-red-600" onClick={deleteAllPalettes}>Delete All</Button>
        </div>
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10 place-items-center">
          {palettes.map((palette, index) => (
            <AnimatePresence key={crypto.randomUUID()}>
              <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="col-span-1 w-fit flex flex-col shadow-md rounded-md bg-white"
              >
                <div className="flex items-center">
                  {palette.map((color, paletteIndex) => {
                    const isFirst = paletteIndex === 0;
                    const isLast = paletteIndex === palette.length - 1;
                    if (isFirst) {
                      return (
                        <TooltipProvider key={crypto.randomUUID()}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div
                                onClick={() => copyToClipboard(color, "Color copied!")}
                                className="w-14 h-12 rounded-tl-md cursor-pointer border-1 border-transparent transition-all duration-200 hover:border-slate-300"
                                style={{ backgroundColor: color }}
                              ></div>
                            <TooltipContent>
                              <p className="text-sm">Copy color</p>
                            </TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    }
                    if (isLast) {
                      return (
                        <TooltipProvider key={crypto.randomUUID()}>
                          <Tooltip>
                            <TooltipTrigger>
                              <div
                                onClick={() => copyToClipboard(color, "Color copied!")}
                                className="w-14 h-12 rounded-tr-md cursor-pointer border-1 border-transparent transition-all duration-200 hover:border-slate-300"
                                style={{ backgroundColor: color }}
                              ></div>
                              <TooltipContent>
                                <p className="text-sm">Copy color</p>
                              </TooltipContent>
                            </TooltipTrigger>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    }
                    return (
                      <TooltipProvider key={crypto.randomUUID()}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div
                              onClick={() => copyToClipboard(color, "Color copied!")}
                              className="w-14 h-12 cursor-pointer border-1 border-transparent transition-all duration-200 hover:border-slate-300"
                              style={{ backgroundColor: color }}
                            ></div>
                            <TooltipContent>
                              <p className="text-sm">Copy color</p>
                            </TooltipContent>
                          </TooltipTrigger>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
                <div className="mt-2 p-4 flex items-center space-x-4 text-sm">
                  <Button
                    onClick={() => deletePalette(index)}
                    className="flex items-center cursor-pointer group hover:text-red-500 hover:bg-red-200/20"
                    variant="outline"
                  >
                    Remove
                    <Trash className="w-5 h-5 group-hover:stroke-red-500" />
                  </Button>
                  <Button
                    onClick={() =>
                      copyToClipboard(palette.join(","), "Palette copied!")
                    }
                    className="flex items-center cursor-pointer"
                    variant="outline"
                  >
                    Copy
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
              </motion.article>
            </AnimatePresence>
          ))}
        </section>
      </section>
    </>
  );
};
