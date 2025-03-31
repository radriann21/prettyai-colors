import { Navigation } from "@/components/app/Navigation"
import { Hero } from "@/components/app/Hero"
import { VisualizePalette } from "@/components/app/VisualizePalette"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col relative font-hind">
      <Toaster />
      <Navigation />
      <Hero />
      <VisualizePalette />
    </main> 
  )
}
