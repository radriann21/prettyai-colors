"use client";
import { useColorStore } from "@/providers/colorStoreProvider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const AIGeneration = () => {
  const [prompt, setPrompt] = useState<string>("");
  const { setAIPalette } = useColorStore((state) => state);

  const handleGeneratePaletteIA = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt || prompt.length === 0 || !prompt.trim()) return;

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate palette");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error("Failed to generate palette");
      }

      setAIPalette(data.palette);
    } catch (error) {
      console.log(error);
    } finally {
      setPrompt("");
    }
  };

  return (
    <AnimatePresence>
      <motion.section 
        className="w-full flex flex-col gap-y-2 mt-5"
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
        <h3 className="font-montserrat font-semibold">
          Describe your palette
        </h3>
        <p className="text-sm text-slate-500">
          Using Google Gemini for the palette generation, we can create a palette based on your description, try it!
        </p>
        <form
          className="flex flex-col gap-y-1"
          onSubmit={handleGeneratePaletteIA}
        >
          <Input
            className="bg-white p-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Colors of a sunset..."
          />
          <Button
            type="submit"
            className="cursor-pointer flex items-center bg-[#29ABE2] hover:bg-[#2096c5]"
          >
            Generate
          </Button>
        </form>
      </motion.section>
    </AnimatePresence>
  );
};
