import { Hero } from "@/components/app/Hero"
import { GeneratorContainer } from "@/components/app/GeneratorContainer"
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <>
      <Toaster />
      <Hero />
      <GeneratorContainer />
    </> 
  )
}
