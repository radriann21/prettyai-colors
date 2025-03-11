import { GenerateSection } from "./components/GenerateSection";
import { SavedPalettes } from "./components/SavedPalettes";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="max-w-6xl h-screen mx-auto flex flex-col px-4 xl:px-0 py-8 relative font-hind">
      <Toaster />
      <section className="mb-8 md:text-center lg:text-left">
        <h1 className="font-montserrat text-3xl font-bold text-slate-900">PrettyaiColors</h1>
        <p className="font-semibold">Generate color palettes and visualize them on real time.</p>
      </section>
      <section className="w-full h-[320px] flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
        <GenerateSection />
        <SavedPalettes />
      </section>
    </main>
  )
}
