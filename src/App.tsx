import Aboutus from "./components/Whychooseus";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import NavAndHerosec from "./components/NavAndHerosec";
import Partners from "./components/Partners";
import Services from "./components/Services";
import DownloadApp from "./components/DownloadApp";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <NavAndHerosec/>
      <Aboutus/>
      <Partners/>
      <Services/>
      <Howitworks/>
      <DownloadApp/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;