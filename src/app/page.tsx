import { InputColor } from "./components/InputColor";
import { DisplayPalette } from "./components/DisplayPalette";

export default function Home() {
  return (
    <main className="max-w-6xl h-screen mx-auto flex flex-col py-8 relative font-hind">
      <section className="mb-8">
        <h1 className="font-montserrat text-3xl font-bold text-slate-900">PrettyaiColors</h1>
        <p className="font-semibold">Generate color palettes and visualize them on real time.</p>
      </section>
      <section className="w-full flex space-x-4">
        <div className="w-1/2 p-4 rounded-md border-[1px] border-slate-300">
          <h2 className="font-montserrat text-lg font-bold">Generate the palette</h2>
          {/* Inputs */}
          <div className="flex items-center space-x-4 mt-6">
            <InputColor />
          </div>
          <DisplayPalette />
        </div>
        <div className="w-1/2 p-4 rounded-md border-[1px] border-slate-300">
          <h2 className="font-montserrat text-lg font-bold">Saved Palettes</h2>
        </div>
      </section>
    </main>
  );
}
