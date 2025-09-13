import { ToolsTabs } from "./ToolsTabs"

export const ToolsContainer = () => {
  return (
    <main className="p-4 rounded-md shadow-md flex flex-col gap-y-4 col-span-2 bg-[#FFF8E9]">
      <div>
        <h2 className="font-bold text-lg font-montserrat">Creation Tools</h2>
        <p className="font-hind text-sm">Choose the method to generate your palette</p>
      </div>
      <ToolsTabs />
    </main>
  )
}