import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ColorPickerProps {
  color: string;
  onChange: (color: string) => void;
}

export const ColorPicker = ({ color, onChange }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localColor, setLocalColor] = useState(color)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (localColor !== color) {
        onChange(localColor)
      }
    }, 600)
    return () => clearTimeout(timeoutId)
  }, [color, localColor, onChange])

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          className="h-20 p-2 border-2 bg-transparent hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          variant="outline"
          style={{ backgroundColor: color }}
        >
          Select Color
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4">
        <div className="space-y-4">
          <div className="space-y-3">
            <label className="text-sm font-semibold">Color Selector</label>
            <Input 
              type="color" 
              value={localColor} 
              className="h-14 w-full cursor-pointer" 
              onChange={(e) => setLocalColor(e.target.value)} 
            />
          </div>
          <div className="text-sm font-semibold">
            {localColor}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
