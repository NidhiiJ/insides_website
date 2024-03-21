import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#DBD8CE] flex flex-col text-black mt-10 md:mt-24 pt-16 px-20 pb-10">
        <div className="flex flex-col md:flex-row gap-6 md:gap-[30%]">
            <div id='foot-contact'>
                <h1 className="text-[22px] pb-5">INSIDES</h1>
                <span className="font-semibold">+91 84637485</span>
                <p>support@insides.com</p>
            </div>
            <div id='foot-sitemap'>
                <h2 className="font-bold pb-2">Site map</h2>
                <div className="grid grid-rows-auto md:grid-cols-2 md:grid-rows-auto gap-y-1 md:gap-x-20">
                    <a href="#hero-section">Home</a>
                    <a href="#our-process">Our Process</a>
                    <a href="#who-are-we">About Us</a>
                    <a href="#portfolio">Projects</a>
                    <a href="#contact-us">Contact Us</a>
                </div>
            </div>
        </div>
        <div className="h-[0.8px] w-full self-center bg-[#051D1D] mt-14"></div>
        <div className="flex flex-col md:flex-row items-center md:justify-between mt-5">
            <div className="flex gap-3">
            <a href="" id="twitter" className="p-2 border-[#051d1d5c] border rounded-full">
            <img src="/twitter.svg" className="h-4" alt="twitter" style={{ filter: 'invert(80%)' }} />
              </a>
              <a href="" id="instagram" className="p-2 border-[#051d1d5c] border rounded-full">
              <img src="/instagram.svg" className="h-4" alt="instagram" style={{ filter: 'invert(80%)' }} />
              </a>
            </div>
            <span className="text-center">© 2024 DN Designs, All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer