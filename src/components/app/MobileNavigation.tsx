import { Sheet, SheetContent, SheetTrigger, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="md:hidden">
          <Menu className="h-10 w-10" />
        </Button>
      </SheetTrigger>
      <SheetContent>
      <SheetHeader>
        <SheetTitle className="font-montserrat text-lg">Menu</SheetTitle>
      </SheetHeader>
        <nav className="flex flex-col space-y-4 p-4 text-lg">
          <Link className="text-slate-700 transition-colors duration-200 hover:text-slate-900" href="/">Home</Link>
          <Link className="text-slate-700 transition-colors duration-200 hover:text-slate-900" href="/about">How this works?</Link>
        </nav>
        <SheetFooter className="flex flex-row items-center space-x-2">
        <Link href="/donate">
            <Button className="px-6 font-montserrat cursor-pointer">
              Donate
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}