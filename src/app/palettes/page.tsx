"use client"
import { useColorStore } from "@/providers/colorStoreProvider"
import { EmptyState } from "@/components/app/EmptyState"
import { SavedPalettes } from "@/components/app/SavedPalettes"

export default function PalettesPage() {
  const { palettes } = useColorStore((state) => state)

  return (
    <>
      <section className="w-full py-8">
        <div className="flex-1 overflow-y-auto">
          {
            palettes.length === 0
            ? (<EmptyState />)
            : (<SavedPalettes />)
          }
        </div>
      </section>
    </> 
  )
}