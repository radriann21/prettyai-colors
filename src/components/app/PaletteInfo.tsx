import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export const PaletteInfo = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-col gap-y-4 h-[200px] overflow-y-auto">
      {colors.map((color) => (
        <article
          key={crypto.randomUUID()}
          className="flex items-center justify-between p-2 border border-[#E5E5E5] rounded-md cursor-pointer transition-shadow duration-300 hover:shadow-md"
        >
          <div className="flex items-center gap-x-2">
            <div
              className="w-12 h-12 rounded-sm"
              style={{ backgroundColor: color }}
            ></div>
            <span className="font-hind font-semibold">{color}</span>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  onClick={() => copyToClipboard(color, "Color copied!")}
                  className="cursor-pointer bg-transparent"
                >
                  <Copy className="w-6 h-6 stroke-black" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Copy color</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </article>
      ))}
    </div>
  );
};
