import {Link} from "react-router-dom";
import { Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { navLinks } from "../lib";
import { ScrollToSec } from "@/lib/ScrollToSec";
import {Button} from "@/components/ui/button";
import { useTranslation } from "react-i18next";


const Navbar = () => {

  
  const {t, i18n}  = useTranslation();


  const changeLanguage = () =>{
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    document.dir = newLanguage === "ar" ? "rtl" : "ltr";
  }

  return (
    <header id="navbar" className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between w-full text-white">
          <Link to="/">
            <img src="/logo.png" alt="Broker-hub-image" className="w-20 lg:w-28" />
          </Link>
          <div className="hidden md:flex items-center gap-5 lg:gap-8 text-sm lg:text-lg">
              {
                navLinks.map((titles,index)=>(
                  <div onClick={()=>ScrollToSec(titles.id)} key={index}>
                    <p className="cursor-pointer">{titles.title}</p>
                  </div>
                ))
              }
          </div>
          <p className="hidden md:flex items-center gap-2">{i18n.language === "en" ? "Arabic" : "English"} <Globe className="w-4 h-4"/></p>
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
          <SheetContent
          // These functions to disable autofocus of radix used in sheet that shifts to the top of the landing page by itself.
            onOpenAutoFocus={(e)=> e.preventDefault()}
            onCloseAutoFocus={(e)=> e.preventDefault()}
          >
            {
              navLinks.map((titles,index)=>(
                <div onClick={()=>ScrollToSec(titles.id)} key={index}>
                  <p className="cursor-pointer text-xl font-semibold text-[#1B263B]">{titles.title}</p>
                </div>
              ))
            }
            <p className="flex md:hidden items-center gap-2 text-[#1B263B] text-xl font-semibold">{i18n.language === "en" ? "Arabic" : "English"} <Globe/></p>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  )
};

export default Navbar;





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
        <div onClick={()=>ScrollToSec(titles.id)} key={index}>
          <p className="cursor-pointer text-xl font-semibold text-[#1B263B]">{titles.title}</p>
        </div>
      ))
    }
    <p className="flex md:hidden items-center gap-2 text-[#1B263B] text-xl font-semibold">Arabic <Globe/></p>
  </SheetContent>
</Sheet>