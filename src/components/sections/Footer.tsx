// import React from 'react'

// import { InstagramLogoIcon, MobileIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import modonLogo from '../../assets/Modon-04.png'
import { Instagram } from "lucide-react"

const Footer = () => {
  return (
    <div>
      <div className="footer-img relative h-96 w-full flex flex-col justify-center items-center bg-primary-color">
       <h1 className="bold text-3xl z-10">Find the Best Place for Living.</h1>
       <p className="regular text-center m-5 z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, vero! <br /> Lorem ipsum dolor sit amet.</p>
       <Button variant="outline" className="rounded z-10">Contact Us</Button>
      </div>
<div className="footer flex flex-col w-full h-96 justify-around items-center relative light bg-white text-primary-color">
       <img src={modonLogo} height={130} width={130} alt="modon-logo" />
       <div className="flex w-full justify-around items-center text-center">
        <div className="ft1 w-1/4 text-left p-7 flex flex-col gap-2">
          <h1 className="bold text-[24px]">Contact Us</h1>
          <h1 className="regular text-[16px]">Call: +123 456 789</h1>
          <p className="regular text-[16px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, sed!</p>
          <h1 className="regular text-[16px]">Email: ali.kmassri@gmail.com</h1>
          <div className="flex mb-5 gap-3">
            <Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button>
            <Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button>
            <Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button>
            <Button variant="ghost" className="h-12 w-12 rounded bg-[#E1EAF5]"><Instagram /></Button>
          </div>
        </div>
        <div className="ft2 w-1/4 p-7">
          <h1 className="bold text-[24px]">Features</h1>
        </div>
        <div className="ft1 w-1/4 p-7">hi</div>
        <div className="ft1 w-1/4 p-7">hi</div>
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