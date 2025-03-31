import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNavigation } from "./MobileNavigation"

export const Navigation = () => {
  return (
    <header className="w-full flex items-center justify-between border-b-1 border-b-slate-300 py-4 px-8 lg:py-6 lg:px-12">
      <div>
        <span className="font-montserrat text-xl lg:text-2xl font-bold tracking-wide">PrettyAIColors</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6 font-semibold tracking-wide">
        <Link className="text-slate-700 transition-colors duration-200 hover:text-slate-900" href="/">Home</Link>
        <Link className="text-slate-700 transition-colors duration-200 hover:text-slate-900" href="/about">How this works?</Link>
        <Link href="/donate">
          <Button className="px-6 font-montserrat cursor-pointer">
            Donate
          </Button>
        </Link>
      </nav>
      <MobileNavigation />
    </header>
  )
}