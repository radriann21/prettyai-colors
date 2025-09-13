import { ToolsContainer } from "./ToolsContainer"
import { ShowcasePalette } from "./ShowcasePalette"

export const GeneratorContainer = () => {
  return (
    <main className="w-full grid grid-cols-3 gap-x-4 px-10">
      <ToolsContainer />
      <ShowcasePalette />
    </main>
  )
}