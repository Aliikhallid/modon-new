// import React from 'react'

import { Button } from "./ui/button"
import { InstagramLogoIcon, FaceIcon, ChatBubbleIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

const Footer = () => {
  return (
    <div className='main-footer h-screen w-full bg-white text-black'>
      <div className="first-footer">
        <div className="first-footer-section">
         <h1>MODON</h1>
         <div className="horizontal-divider"></div>
         <div className="social-media-container">
          <div className="social-media"><InstagramLogoIcon /></div>
          <div className="social-media"><FaceIcon /></div>
          <div className="social-media"><ChatBubbleIcon /></div>
          <div className="social-media"><TwitterLogoIcon /></div>
         </div>
        </div>
        <div className="second-footer-section">
          <input type="text" placeholder="E-Mail" />
          <Button className="bg-blue-950">SUBSCRIPE</Button>
        </div>
      </div>
      <div className="second-footer">
        <div className="second-footer-footer">
          <h1>TITLE</h1>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
        </div>
        <div className="second-footer-footer">
          <h1>TITLE</h1>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
        </div>
        <div className="second-footer-footer">
          <h1>TITLE</h1>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
          <div className="second-footer-item">Hello</div>
        </div>
      </div>
     </div>
  )
}

export default Footer