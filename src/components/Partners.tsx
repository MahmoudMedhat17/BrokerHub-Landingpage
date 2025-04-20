import { partnersTitle } from "..";


const Partners = () => {



  return (
    <section className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 text-2xl font-medium">
          <h3>Trusted By Industry Leaders</h3>
          <span className="text-[#FFBF00]">Over 200 Partners</span>  
          <h3>Top Developers in the Field</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {
            partnersTitle.map((partner,index)=>(
              <div key={index}>
                <img src={partner.icon} alt={partner.title} className="md:w-28 xl:w-full"/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Partners;