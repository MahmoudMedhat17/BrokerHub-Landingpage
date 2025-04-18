import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
       <div className="flex flex-col justify-center items-center space-y-8">
        <div className="flex flex-col justify-center items-center text-center max-w-3xl space-y-4">
           <h3 className="text-white text-5xl font-bold">Take Charge of Your Career and Begin Earning Now</h3>
           <p className="text-base text-[#E3E2E2]">No company, no limits! Sign up now, work your own way, and get paid fast. Everything you need to succeed all in one app. What are you waiting for?</p>
           <Button variant="default" className="p-6 cursor-pointer bg-yellow-500 text-[#1B263B] mt-4 font-semibold text-base">
            Get Started Now
           </Button>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <img src="/personOne.png" alt="personOne-img" className="w-7 h-7"/>
            <img src="/personTwo.png" alt="personTwo-img" className="w-7 h-7"/>
            <img src="/personThree.png" alt="personThree-img" className="w-7 h-7"/>
          </div>
         <p className="text-white text-sm sm:text-base">Over 50,000 Brokers are already utilizing our app.</p>
        </div>
       </div>
    </section>
  )
}

export default Hero;