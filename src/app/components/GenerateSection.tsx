import { InputColor } from "./InputColor";
import { RandomPaletteButton } from "./RandomPaletteButton";
import { DisplayPalette } from "./DisplayPalette";
import { AIPaletteButton } from "./AIPaletteButton";

export const GenerateSection = () => {
  return (
    <div className="w-full md:w-9/12 lg:w-1/2 p-4 rounded-md border-[1px] border-slate-300 h-fit sm:h-full">
      <h2 className="font-montserrat text-lg font-bold">Generate the palette</h2>
      <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 space-x-4 mt-2">
        <InputColor />
        <RandomPaletteButton />
        <AIPaletteButton />
      </div>
      <DisplayPalette />
  </div>
  )
}