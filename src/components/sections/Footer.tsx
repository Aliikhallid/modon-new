// import React from 'react'

import { Button } from "../ui/button"
import { InstagramLogoIcon, FaceIcon, ChatBubbleIcon, TwitterLogoIcon, MobileIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

const Footer = () => {
  return (
//     <div className='main-footer h-screen w-full bg-white text-black relative'>
//       <div className="first-footer">
//         <div className="first-footer-section">
//          <h1>MODON</h1>
//          <div className="horizontal-divider"></div>
//          <div className="social-media-container">
//           <div className="social-media"><InstagramLogoIcon /></div>
//           <div className="social-media"><FaceIcon /></div>
//           <div className="social-media"><ChatBubbleIcon /></div>
//           <div className="social-media"><TwitterLogoIcon /></div>
//          </div>
//         </div>
//         <div className="second-footer-section">
//           <input type="text" placeholder="E-Mail" />
//           <Button className="bg-blue-950">SUBSCRIPE</Button>
//         </div>
//       </div>
//       <div className="second-footer w-full flex justify-around items-center gap-10 light mt-16">
//         <div className="second-footer-footer">
//           <h1 className="regular text-2xl m-1">About Modon</h1>
//           <p>Modon knows no boundaries for leadership.</p>
//           <p>We work today to shape the future.</p>
//           <div className="social-foot flex gap-3 mt-3">
//             <InstagramLogoIcon />
//             <InstagramLogoIcon />
//             <InstagramLogoIcon />
//             <InstagramLogoIcon />
//           </div>
//         </div>
//         <div className="second-footer-footer">
//           <h1 className="regular text-2xl m-1">Quick Links</h1>
//           <div className="second-footer-item m-1">Home</div>
//           <div className="second-footer-item m-1">About Us</div>
//           <div className="second-footer-item m-1">Construction Updates</div>
//           <div className="second-footer-item m-1">Contact</div>
//         </div>
//         <div className="second-footer-footer">
//           <h1 className="regular text-2xl m-1">Privacy Links</h1>
//           <div className="second-footer-item m-1">Privacy Policy</div>
//           <div className="second-footer-item m-1">Terms & Conditions</div>
//           <div className="second-footer-item m-1">FAQ</div>
//           <div className="second-footer-item m-1">Enquire Now</div>
//         </div>
//         <div className="second-footer-footer">
//           <h1 className="regular text-2xl m-1">Head Office</h1>
//           <p className="w-3/4">Al Mamoon District, Al Nossor Area
// Near Baghdad Tower, Baghdad, Iraq</p>
// <div className="flex">
//           <div className="second-footer-item m-1 flex gap-2"><MobileIcon height={20} width={20}/> <h1>+964 770 0300 005</h1></div>
//           <div className="second-footer-item m-1 flex gap-2"><EnvelopeClosedIcon height={20} width={20}/> <h1>Info@modoniq.com</h1></div>
// </div>
//         </div>
//       </div>
//       <div className="third-footer h-16 w-full bg-teal-700 absolute bottom-0 light flex justify-around items-center text-white">
//         <h1>Copyright © 2023. All Rights Reserved</h1>
//         <h1>Powered by ADZone</h1>
//       </div>
//      </div> 
<div className="footer flex h-96 justify-around items-center relative light">
  <div>
  <h1 className="regular text-2xl m-1">About Modon</h1>
           <p>Modon knows no boundaries for leadership.</p>
           <p>We work today to shape the future.</p>
           <div className="social-foot flex gap-3 mt-3">
             <InstagramLogoIcon />
             <InstagramLogoIcon />
             <InstagramLogoIcon />
             <InstagramLogoIcon />
           </div>
  </div>
  <div>
           <h1 className="regular text-2xl m-1">Quick Links</h1>
           <div className=" m-1">Home</div>
           <div className=" m-1">About Us</div>
           <div className="m-1">Construction Updates</div>
           <div className="m-1">Contact</div>
         </div>
         <div className="">
           <h1 className="regular text-2xl m-1">Privacy Links</h1>
           <div className=" m-1">Privacy Policy</div>
           <div className=" m-1">Terms & Conditions</div>
           <div className=" m-1">FAQ</div>
           <div className=" m-1">Enquire Now</div>
         </div>
 <div>
       <h1 className="regular text-2xl m-1">Head Office</h1>
       <p className="w-max m-1">Al Mamoon District, Al Nossor Area
                          Near Baghdad Tower, Baghdad, Iraq</p>
        <div className="flex">
           <div className="second-footer-item m-1 flex gap-2"><MobileIcon height={20} width={20}/> <h1>+964 770 0300 005</h1></div>
           <div className="second-footer-item m-1 flex gap-2"><EnvelopeClosedIcon height={20} width={20}/> <h1>Info@modoniq.com</h1>
        </div>
      </div>
         <div className="third-footer h-10 w-full bg-teal-700 absolute left-0 bottom-0 light flex justify-around items-center text-white">
         <h1>Copyright © 2023. All Rights Reserved</h1>
         <h1>Powered by ADZone</h1>
       </div>
       </div>
</div>
  )
}

export default Footer