import RatingSystem from "@/lib/RatingSystem";
import { testimonialsPeople } from "@/lib";

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-6 sm:px-8 md:px-10 lg:px-[100px] py-24">
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-[#1B263B] text-[32px] font-semibold">User Testimonials</h2>
            <p className="text-[#6D6D6D]">Listen to the experiences of brokers and developers who trust Brokers Hub daily.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {
                testimonialsPeople.map((testimonial,index)=>(
                    <div key={index} className="space-y-3 border-2 py-6 px-4 rounded-[16px] shadow-md">
                        <RatingSystem/>
                        <p>{testimonial.desc}</p>
                        <div className="flex items-center gap-4">
                            <img src={testimonial.icon} alt={testimonial.name} />
                            <div>
                                <p className="text-[#1E1E1E] font-semibold">{testimonial.name}</p>
                                <p className="text-[14px] text-[#545454]">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }            
        </div>
    </section>
  )
}

export default Testimonials;