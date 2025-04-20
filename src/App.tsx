import Aboutus from "./components/Aboutus";
import Howitworks from "./components/Howitworks";
import NavAndHerosec from "./components/NavAndHerosec";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Stores from "./components/Stores";

const App = () => {
  return (
    <div>
      <NavAndHerosec/>
      <Aboutus/>
      <Partners/>
      <Services/>
      <Howitworks/>
      <Stores/>
    </div>
  )
}

export default App;