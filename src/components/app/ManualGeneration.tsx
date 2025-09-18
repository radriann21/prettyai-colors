"use client";
import { ColorPicker } from "./ColorPicker";
import { useColorStore } from "@/providers/colorStoreProvider";

export const ManualGeneration = () => {

  const { colors, updateColorAtIndex } = useColorStore((state,) => state)

  const handleColorChange = (index: number, color: string) => {
    updateColorAtIndex(index, color)
  }

  return (
    <section>
      <h1>Manual Generation</h1>
      <p>Use the inputs to select the colors for your personalized palette.</p>
      <section className="w-full grid grid-cols-6 gap-4">
        {
          colors.map((color, index) => (
            <ColorPicker 
              key={index} 
              color={color} 
              onChange={(color) => handleColorChange(index, color)} 
            />
          ))
        }
      </section>
    </section>
  );
};
