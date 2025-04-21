import { howItWorks } from "../lib";


const Howitworks = () => {
  return (
    <section id="howitworks" className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <h1 className="text-[#1B263B] text-5xl font-bold">How it Works</h1>
        <div className="flex flex-col xl:flex-row items-center gap-20 pt-14">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
                {
                    howItWorks.map((titles,index)=>(
                        <div key={index}>
                            <div className="flex flex-col space-y-4">
                                <div className="w-14 h-14 bg-[#F1F1F1] rounded-[8px] flex justify-center items-center">
                                    <img src={titles.icon} alt={titles.icon} className="w-6 h-6" />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-medium text-[#1E1E1E]">{titles.title}</h3>
                                    <p className="text-[#545454] max-w-[276px]">{titles.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full">
                <img src="/howItWorks.png" alt="How-it-works" className="w-full lg:w-1/2 mx-auto"/>
            </div>
        </div>
    </section>
  )
}

export default Howitworks;