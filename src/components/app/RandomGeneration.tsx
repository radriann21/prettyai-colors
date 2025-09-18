"use client";
import { AnimatePresence, motion } from "motion/react";
import { RandomPaletteButton } from "./RandomPaletteButton";

export const RandomGeneration = () => {
  return (
    <AnimatePresence>
      <motion.section
        className="w-full flex flex-col mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.2,
          ease: "linear",
          stiffness: 100,
          damping: 15,
        }}
      >
        <h3 className="font-bold font-hind text-lg">Random Generation</h3>
        <p className="text-sm text-slate-500 mb-2">
          Using our random generator, we can create a palette based on random
          colors, maintaining the balance of the palette.
        </p>
        <RandomPaletteButton />
      </motion.section>
    </AnimatePresence>
  );
};
