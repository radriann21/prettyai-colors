import { ToolsContainer } from "./ToolsContainer"
import { ShowcasePalette } from "./ShowcasePalette"

export const GeneratorContainer = () => {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-x-4 px-4 lg:px-10">
      <ToolsContainer />
      <ShowcasePalette />
    </section>
  )
}