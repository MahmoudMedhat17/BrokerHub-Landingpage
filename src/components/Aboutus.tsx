
const Aboutus = () => {

    const aboutUsLinks = [
        {
            number:"1",
            title:"Effortless Commission Tracking",
            desc:"Easily track your commissions, requests, and payouts in one transparent and user-friendly platform."
        },
        {
            number:"2",
            title:"Direct Access to Leading Developers",
            desc:"Connect and collaborate with over 200 trusted developers like ORA and Talat Mostafa—no middlemen, no delays."
        },
        {
            number:"3",
            title:"Mobile-Optimized Experience",
            desc:"Work from anywhere with a smooth, user-friendly mobile interface designed for brokers on the go."
        }
    ]

  return (
    <section className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <div className="flex items-start gap-[120px]">
            <img src="/public/Feature-image.png" alt="Feature-image" className="w-[403px] h-[557px]"/>
            <div>
                <h1 className="text-5xl font-bold text-[#1B263B] mb-10">
                    Why Choose Brokers Hub?
                </h1>
                <div className="space-y-8">
                    {
                        aboutUsLinks.map((aboutUs)=>(
                        <div className="flex gap-4 group">
                            <div className="flex justify-center items-center w-14 h-14 rounded-full border-2 border-[#1B263B] group-hover:bg-[#1B263B] group-hover:text-white transition duration-300">
                                <span className="font-bold text-lg">
                                    {
                                        aboutUs.number
                                    }
                                </span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium text-[#1E1E1E]">{aboutUs.title}</h3>
                                <p className="text-[#545454]">{aboutUs.desc}</p>
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

export default Aboutus;