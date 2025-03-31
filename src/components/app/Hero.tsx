import { GeneratePaletteComponent } from "@/components/app/GeneratePaletteComponent"

export const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto py-16 text-center px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Generate the color palette that you need.</h1>
      <p className="text-slate-600 mt-2 text-lg w-full md:w-[60%] mx-auto">
        Use the different methods of generation and created the palette you want for your brand or your webpage.
      </p>
      <GeneratePaletteComponent />
    </section>
  )
}