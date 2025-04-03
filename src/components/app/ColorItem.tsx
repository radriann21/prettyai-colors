import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { copyToClipboard } from "@/utils/copyToClipboard"

export const ColorItem = ({ className, color }: { className?: string, color: string }) => {
  return (
    <div className={className} style={{ backgroundColor: color }}>
    <span className="absolute -bottom-6 left-2 text-xs">{color}</span>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={() => copyToClipboard(color, "Color copied to clipboard")} variant="ghost" className="absolute top-2 right-2 cursor-pointer hover:bg-white/60">
            <Copy className="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Copy color</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
  )
}