import Hero from "./Hero";
import Navbar from "./Navbar";

const NavAndHerosec = () => {
  return (
    <div className="bg-[url(/HeroImage.png)] bg-cover bg-center h-screen">
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default NavAndHerosec;