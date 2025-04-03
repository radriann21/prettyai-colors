import { Hero } from "@/components/app/Hero"
import { VisualizePalette } from "@/components/app/VisualizePalette"
import { VisualizeOnWeb } from "@/components/app/VisualizeOnWeb"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <>
      <Toaster />
      <Hero />
      <VisualizePalette />
      <VisualizeOnWeb />
    </> 
  )
}
