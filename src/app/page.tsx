import { InputColor } from "./components/InputColor";

export default function Home() {
  return (
    <section className="max-w-6xl h-screen mx-auto flex flex-col items-center justify-center py-8 relative font-hind">
      <section className="space-y-2 text-center">
        <h1 className="font-montserrat text-4xl font-bold text-slate-900">PrettyaiColors</h1>
        <p className="tracking-wide">Generate colors palettes and visualize them on real time.</p>
      </section>
      <InputColor />
    </section>
  );
}
