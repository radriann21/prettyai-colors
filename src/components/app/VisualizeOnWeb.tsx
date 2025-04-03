"use client";
import { AnimatePresence, motion } from "motion/react";
import { useColorStore } from "@/providers/colorStoreProvider";
import { VisualizeMock } from "./VisualizeMock";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

export const VisualizeOnWeb = () => {
  const colors = useColorStore((state) => state.colors);

  if (colors.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="mt-32 w-[80%] mx-auto xl:w-full text-center"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button className="cursor-pointer w-fit mx-auto font-montserrat bg-slate-300/40 flex items-center text-black hover:bg-slate-300/80">
              See in web <Eye className="w-12 h-12 stroke-black" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[620px] lg:min-w-[920px]">
            <DialogHeader>
              <DialogTitle className="font-montserrat">Visualization</DialogTitle>
            </DialogHeader>
            <VisualizeMock colors={colors} />
          </DialogContent>
        </Dialog>
      </motion.section>
    </AnimatePresence>
  );
};
