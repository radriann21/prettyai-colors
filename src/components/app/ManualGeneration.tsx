"use client";
import { ColorPicker } from "./ColorPicker";
import { useColorStore } from "@/providers/colorStoreProvider";
import { motion, AnimatePresence } from "motion/react";

export const ManualGeneration = () => {

  const { colors, updateColorAtIndex } = useColorStore((state,) => state)

  const handleColorChange = (index: number, color: string) => {
    updateColorAtIndex(index, color)
  }

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: 'linear',
          stiffness: 100,
          damping: 15
        }}
      >
        <h1 className="font-semibold">Manual Generation</h1>
        <p className="text-sm">Use the inputs to select the colors for your personalized palette.</p>
        <section className="w-full grid grid-cols-6 gap-4 mt-2">
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
      </motion.section>
    </AnimatePresence>
  );
};
