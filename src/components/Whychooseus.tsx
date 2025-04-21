import { aboutUsLinks } from "../lib";

const Whychooseus = () => {

  return (
    <section id="whychooseus" className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[120px]">
            <img src="/public/Feature-image.png" alt="Feature-image" className="w-[303px] sm:w-[403px] h-[457px] sm:h-[557px]"/>
            <div>
                <h1 className="text-5xl font-bold text-[#1B263B] mb-10">
                    Why Choose Brokers Hub?
                </h1>
                <div className="space-y-8">
                    {
                        aboutUsLinks.map((aboutUs, index)=>(
                        <div key={index} className="flex gap-4 group">
                            <div className="flex justify-center items-center w-10 sm:w-14 h-10 sm:h-14 rounded-full border-2 border-[#1B263B] group-hover:bg-[#1B263B] group-hover:text-white transition duration-300">
                                <span className="font-bold text-lg">
                                    {
                                        aboutUs.number
                                    }
                                </span>
                            </div>
                            <div className="space-y-2 flex-1/2 sm:flex-1">
                                <h3 className="text-xl sm:text-2xl font-semibold text-[#1E1E1E]">{aboutUs.title}</h3>
                                <p className="text-sm sm:text-base text-[#545454]">{aboutUs.desc}</p>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Whychooseus;