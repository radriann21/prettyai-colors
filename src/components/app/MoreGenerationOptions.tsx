import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { InputColor } from "@/components/app/InputColor"
import { RandomPaletteButton } from "@/components/app/RandomPaletteButton"

export const MoreGenerationOptions = () => {
  return (
    <div className="flex items-start">
      <Popover>
        <PopoverTrigger className="block mt-2 md:hidden" asChild>
          <Button>More options <Plus /></Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-start space-y-2">
        <InputColor />
        <RandomPaletteButton />
        </PopoverContent>
      </Popover>
    </div>
  )
}