// import React from 'react'

// import { InstagramLogoIcon, MobileIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
// import modonLogo from '../../assets/Modon-04.png'
// import modonLogo1 from '../../assets/Modon-White.png'
import google from "../../assets/google-play.png"
import apple from "../../assets/apple.png"
import { Instagram } from "lucide-react"
import { Link } from "react-router-dom"
import Enquire from "./Enquire"
import { EnvelopeOpenIcon, MobileIcon } from "@radix-ui/react-icons"

const Footer = () => {
  return (
    <div className="w-full">
      <div className="footer-img relative h-96 w-full flex flex-col justify-center items-center bg-primary-multiply-color">
       <h1 className="bold text-3xl z-10">Find the Best Place for Living.</h1>
       <p className="regular text-center m-5 z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero! <br /> Lorem ipsum dolor sit amet.</p>
      <Link to="/contact" className="z-10"><Button variant="outline" className="rounded z-10">Contact Us</Button></Link>
      </div>
<div className="footer flex flex-col w-full h-fit py-10 justify-around items-center relative light bg-white text-primary-color">
       {/* <img src={modonLogo} height={130} width={130} alt="modon-logo" /> */}
       {/* <img className="bg-primary-color mt-3 p-2 rounded" src={modonLogo1} height={130} width={130} alt="modon-logo" /> */}
       <div className="flex flex-wrap w-full justify-around items-start">
        <div className="ft1  p-7 flex flex-col gap-2">
          <h1 className="bold text-[24px]">About Modon</h1>
          {/* <h1 className="regular text-[18px]">Call: +123 456 789</h1> */}
          <p className="regular text-[18px]">Modon knows no boundaries for leadership.<br /> We work today to shape the future.</p>
          <h1 className="regular text-[18px]">Email: info@modoniq.com</h1>
          <div className="flex mb-5 gap-3">
           <a href="/"><Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button></a>
           <a href="/"><Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button></a>
           <a href="/"><Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button></a>
           <a href="/"><Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button></a>
          </div>
        </div>
        <div className="ft2 p-7 flex flex-col gap-1">
          <h1 className="bold text-[24px]">Quick Links</h1>
         <Link to="/buruj"><p className="regular text-[18px]">🔵 Projects</p></Link>
         <Link to="/construction"><p className="regular text-[18px]">🔵 Constructions</p></Link>
         <Link to="/news"><p className="regular text-[18px]">🔵 News</p></Link>
         <Link to="/contact"><p className="regular text-[18px]">🔵 Contact</p></Link>
         <Link to="/careers"><p className="regular text-[18px]">🔵 Careers</p></Link>
        </div>
        <div className="ft1 p-7 flex flex-col gap-1">
          <h1 className="bold text-[24px]">Privacy Links</h1>
          <Link to="/about-us"><p className="regular text-[18px]">🔵 Privacy Policy</p></Link>
          <Link to="/about-us"><p className="regular text-[18px]">🔵 FAQ</p></Link>
          <Link to="/about-us"><p className="regular text-[18px]">🔵 Terms & Conditions</p></Link>
          <Link to="/about-us" className="flex items-center m-3 gap-2 regular text-[18px]"><Enquire /></Link>
        </div>
        <div className="ft1 p-7 flex flex-col gap-1">
          <h1 className="bold text-[24px]">Head Office</h1>
          <p className="regular text-[18px]">Al Mamoon District, Al Nossor Area Near<br /> Baghdad Tower, Baghdad, Iraq.</p>
          <p className="regular text-[18px] flex items-center gap-2"><MobileIcon height={23} width={23} />  +964 770 0300 005</p>
          <p className="regular text-[18px] flex items-center gap-2"><EnvelopeOpenIcon height={23} width={23} />  info@modoniq.com</p>
          <div className="store-links">
          <a className="store-link" href="https://apps.apple.com/app/modon/id1639703738"><img src={apple} className="h-10" alt="Download IOS" /></a>
          <a className="store-link" href="https://play.google.com/store/apps/details?id=com.my_modon"><img src={google} className="h-10" alt="Download Android" /></a>
         </div>
        </div>
       </div>
         <div className="third-footer h-10 w-full bg-primary-color absolute bottom-0 light flex justify-around items-center text-white">
         <h1>Copyright © 2023. All Rights Reserved</h1>
         <h1>Powered by ADZone</h1>
       </div>
</div>
</div>
  )
}

export default Footer