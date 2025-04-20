import { Link } from "react-router-dom";
import { footerLinks } from "@/lib";

const Footer = () => {
  return (
    <footer className="bg-[#1B263BF2]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-6 sm:px-8 md:px-10 lg:px-[100px] pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link to="/">
                <img src="/logo.png" alt="BrokerHubLogo" />
            </Link>
            <p className="mt-4 max-w-xs text-gray-500">
                Brokers Hub gives you the freedom to broker your way no limits, no middlemen, just opportunities.
            </p>

            <div className="flex items-center gap-4 pt-6">
                {
                    footerLinks.socialIcons.map((socialMedia,index)=>(
                        <Link to={socialMedia.link}>
                          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#D9D9D933]" key={index}>
                            <img src={socialMedia.icon} alt={socialMedia.title}/>
                          </div>
                        </Link>
                    ))
                }
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                
          </div>

          <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer;