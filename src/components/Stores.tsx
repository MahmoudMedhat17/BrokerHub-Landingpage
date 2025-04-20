import { Link } from "react-router-dom";

const Stores = () => {
  return (
    <section className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <div className="relative p-6 bg-[#1B263B] rounded-2xl flex flex-col justify-center items-center text-white space-y-8 overflow-hidden">
            <div className="absolute bg-gradient-to-l from-white/30 to-white/5 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 rounded-full -top-14 -left-10"></div>
            <div className="absolute bg-gradient-to-l from-white/30 to-white/5 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 rounded-full -bottom-14 -right-10"></div>
            <div className="text-center">
                <h2 className="font-semibold text-[32px]">Get Started Now</h2>
                <p className="text-sm">Ready to get started? Download now and join thousands of brokers.</p>
            </div>
            <div className="flex gap-4">
                <Link to="https://play.google.com/store/apps?hl=en">
                  <img src="/google-play.png" alt="googleplayStore" className="w-28 sm:w-40 md:w-full"/>
                </Link>
                <Link to="https://www.apple.com/eg/app-store/">
                  <img src="/appleStore.png" alt="appleStore" className="w-28 sm:w-40 md:w-full"/>
                </Link>
            </div>
        </div>
    </section>
  )
};

export default Stores;