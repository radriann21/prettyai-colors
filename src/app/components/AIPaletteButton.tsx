"use client"
import { BrainCog } from "lucide-react"
import { useState } from "react"
import { useColorStore } from "@/providers/colorStoreProvider"

export const AIPaletteButton = () => {
  const { setAIColor, setAIPalette } = useColorStore((state) => state)

  const [prompt, setPrompt] = useState<string>('')

  const handleGeneratePaletteIA = async () => {
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
    }
  }

  return (
    <button 
      className="bg-neutral-900 text-white font-semibold py-2 px-4 rounded-md text-sm inline-flex items-center cursor-pointer transition-colors duration-200 hover:bg-neutral-800" 
      onClick={() => {
        if (document) {
          (document.getElementById('my_modal_2') as HTMLFormElement).showModal();
        }
      }}
    >
      AI Palette
      <BrainCog className="w-4 h-4 ml-2" />
      <dialog id="my-modal" className="modal">
        <div className="modal-box text-left text-black max-w-xl">
          <h3 className="font-bold text-lg font-montserrat">Generate a palette</h3>
          <p className="text-sm">
            Explain the type of emotions, the concept of the palette, what is the main use and if you have any color in mind to generate one
          </p>
          <div className="mt-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Prompt</legend>
              <textarea className="textarea h-24 resize-none" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe the palette..."></textarea>
              <div className="modal-action mt-1">
                <div className="flex w-full items-start space-x-4">
                  <button onClick={handleGeneratePaletteIA} className="btn rounded-md bg-neutral-900 w-fit text-white font-semibold transition-colors duration-200 hover:bg-neutral-800" type="submit">Generate</button>
                  <form method="dialog">
                    <button className="btn rounded-md bg-transparent border-1 border-red-500 w-fit text-red-500 font-semibold transition-colors duration-200 hover:bg-red-50">Close</button>
                  </form>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </dialog>
    </button>
  )
}