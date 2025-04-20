import Aboutus from "./components/Aboutus";
import Footer from "./components/Footer";
import Howitworks from "./components/Howitworks";
import NavAndHerosec from "./components/NavAndHerosec";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Stores from "./components/Stores";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <NavAndHerosec/>
      <Aboutus/>
      <Partners/>
      <Services/>
      <Howitworks/>
      <Stores/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App;