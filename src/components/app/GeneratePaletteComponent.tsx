"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BrainCog } from "lucide-react"
import { InputColor } from "@/components/app/InputColor"
import { RandomPaletteButton } from "@/components/app/RandomPaletteButton"
import { MoreGenerationOptions } from "@/components/app/MoreGenerationOptions"
import { useColorStore } from "@/providers/colorStoreProvider"

export const GeneratePaletteComponent = () => {
  const { setAIColor, setAIPalette } = useColorStore((state) => state)
  const [prompt, setPrompt] = useState<string>('')

  const handleGeneratePaletteIA = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt || !prompt.trim()) return

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
      })
      if (!res.ok) {
        throw new Error('Failed to generate palette')
      }
      const data = await res.json()
      
      if (data.error) {
        throw new Error('Failed to generate palette')
      }

      if (data.baseColor === null) {
        setAIPalette(data.palette)
      } else {
        setAIColor(data.baseColor)
        setAIPalette(data.palette)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setPrompt('')
    }
  }

  return (
    <section className="mt-10 p-6 rounded-md shadow-lg w-[80%] mx-auto xl:w-full">
      <form onSubmit={handleGeneratePaletteIA} className="flex w-full space-x-2">
        <Input onChange={(e) => setPrompt(e.target.value)} className="placeholder:text-sm" placeholder="Describe your palette..." />
        <Button type="submit" className="cursor-pointer flex items-center">AI Palette <BrainCog /> </Button>
      </form>
      <div className="mt-4 items-center space-x-2 hidden md:flex">
        <InputColor />
        <RandomPaletteButton />
      </div>
      <MoreGenerationOptions />
   </section>
  )
}