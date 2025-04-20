import {Link} from "react-router-dom";
import { Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { navLinks } from "..";

const Navbar = () => {

 

  return (
    <header className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between w-full text-white">
          <Link to="/">
            <img src="/logo.png" alt="Broker-hub-image" className="w-20 lg:w-28" />
          </Link>
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-lg">
              {
                navLinks.map((titles,index)=>(
                  <Link key={index} to={titles.link}>
                    <p>{titles.title}</p>
                  </Link>
                ))
              }
          </div>
          <p className="hidden md:flex items-center gap-2">Arabic <Globe className="w-4 h-4"/></p>
        </div>
        <div className="flex items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
              variant="default"
              className="rounded-sm transition bg-transparent cursor-pointer">
                <Menu className="!w-7 !h-7"/>
              </Button>
            </SheetTrigger>
            <SheetContent>
              {
                navLinks.map((titles,index)=>(
                  <Link key={index} to={titles.link}>
                    <p className="text-xl font-semibold text-[#1B263B]">{titles.title}</p>
                  </Link>
                ))
              }
              <p className="flex md:hidden items-center gap-2 text-[#1B263B] text-xl font-semibold">Arabic <Globe/></p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
};

export default Navbar;