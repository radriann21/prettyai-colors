"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { Copy, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { AnimatePresence, motion } from "motion/react"
import { copyToClipboard } from "@/utils/copyToClipboard"
import { ColorItem } from "@/components/app/ColorItem"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const VisualizePalette = () => {
  const colors = useColorStore((state) => state.colors)
  const savePalette = useColorStore((state) => state.savePalette)

  const handleSavePalette = () => {
    savePalette(colors)
    toast('Palette saved!')
  }

  if (colors.length === 0) return null

  return (
    <AnimatePresence>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: 'linear' }}
        className="mt-10 w-[80%] sm:max-w-[920px] mx-auto xl:w-full text-center">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full sm:w-full mx-auto">
          <h2 className="font-montserrat text-2xl font-bold">Your color palette</h2>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="cursor-pointer bg-transparent" onClick={handleSavePalette}>
                    <Save className="w-12 h-12 stroke-black" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save palette</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" className="cursor-pointer bg-transparent" onClick={() => copyToClipboard(colors.join(','), 'Palette copied!')}>
                    <Copy className="w-12 h-12 stroke-black" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy palette</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center w-full mx-auto gap-8">
          {
            colors.map((color) => (
              <ColorItem key={crypto.randomUUID()} color={color} className="relative w-28 h-28 rounded-md transition-colors duration-200 shadow-lg" />
            ))
          }
        </div>
      </motion.section>
    </AnimatePresence>
  )
} 