import { BookDashed } from "lucide-react"

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <BookDashed className="w-10 h-10 mb-2" />
      <p className="text-lg font-semibold">No palettes saved</p>
    </div>
  )
}