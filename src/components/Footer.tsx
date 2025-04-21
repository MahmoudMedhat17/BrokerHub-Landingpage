import { footerLinks } from "@/lib";
import { ScrollToSec } from "@/lib/ScrollToSec";
import { Link } from "react-router-dom";

const Footer = () => {

  const date = new Date();
  const yearlyDate = date.getFullYear();


  return (
    <footer id="footer" className="bg-[#1B263BF2]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div onClick={()=>ScrollToSec("navbar")}>
                <img src="/logo.png" alt="BrokerHubLogo" className="cursor-pointer"/>
            </div>
            <p className="mt-4 max-w-xs text-gray-500">
                Brokers Hub gives you the freedom to broker your way no limits, no middlemen, just opportunities.
            </p>

            <div className="flex items-center gap-4 pt-6">
                {
                    footerLinks.socialIcons.map((socialMedia,index)=>(
                        <div key={index}>
                          <Link to={socialMedia.link} className="w-10 h-10 rounded-full flex justify-center items-center bg-[#D9D9D933]" key={index}>
                            <img src={socialMedia.icon} alt={socialMedia.title}/>
                          </Link>
                        </div>
                    ))
                }
            </div>
          </div>
          <div className="text-white grid grid-cols-1 gap-20 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center py-10">
                <div className="flex flex-col gap-8">
                  {
                    footerLinks.firstLinks.map((link, index)=>(
                      <ul className="" key={index}>
                        <li>{link.title}</li>
                      </ul>
                    ))
                  }
                </div>
                <div className="flex flex-col gap-8">
                  {
                    footerLinks.secondLinks.map((link, index)=>(
                      <ul className="" key={index}>
                        <li>{link.title}</li>
                      </ul>
                    ))
                  }
                </div>
                <div className="flex flex-col gap-8">
                  {
                    footerLinks.thirdLinks.map((link, index)=>(
                      <ul className="" key={index}>
                        <li>{link.title}</li>
                      </ul>
                    ))
                  }
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="font-semibold text-lg">Contact Us</h3>
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <img src="/email.png" alt="emailicon" />
                      <span>Brokerhub@email.com</span>
                    </div>
                    <div className="flex gap-4">
                      <img src="/phone.png" alt="phoneicon" />
                      <span>+22451824</span>
                    </div>
                  </div>
                </div>
          </div>
        </div>
    </div>
    <div className="w-full flex justify-center items-center">                
      <p className="text-xs text-center text-gray-500">© {yearlyDate} Brokers Hub. All rights reserved.</p>
    </div>
</footer>
  )
}

export default Footer;