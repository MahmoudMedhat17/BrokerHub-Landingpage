import { serviceslink } from "..";


const Services = () => {
  return (
    <section className="pt-24">
        <div className='px-6 sm:px-8 md:px-10 lg:px-[100px] py-10 bg-[#1B263B]'>
            <div className='flex flex-col justify-center items-center text-center max-w-xl mx-auto'>
                <h2 className='text-[#FFBF00] font-semibold text-[32px]'>What We Provide ?</h2>
                <p className='text-[#E3E2E2]'>From managing property listings to tracking commissions, Brokers Hub provides all the tools you need to expand your business.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pt-12'>
                {
                    serviceslink.map((service,index)=>{
                        return(
                            <div key={index} className='w-full h-full p-6 border-[1px] rounded-[8px] border-white/40 flex flex-col justify-start items-center space-y-8'>
                                <div className="w-28 h-28 rounded-full border-white border-2 flex justify-center items-center">
                                    <img src={service.icon} className="text-white w-10 h-10"/>
                                </div>
                                <div className="text-white text-center">
                                    <h4 className="font-semibold text-lg">{service.title}</h4>
                                    <p className="text-[#E3E2E2]">{service.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
)
}

export default Services;