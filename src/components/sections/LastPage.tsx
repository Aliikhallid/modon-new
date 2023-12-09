// import React from 'react'

import TitleDivider from "./TitleDivider"
import dig from "../../assets/digging.png"
import credit from "../../assets/credit-card.png"
import document from "../../assets/document-signed.png"
import exchange from "../../assets/exchange.png"
import hand from "../../assets/hand-sparkles.png"
import cardclip from "../../assets/id-card-clip-alt.png"
import pingpong from "../../assets/ping-pong.png"
import share from "../../assets/share-square.png"
import google from "../../assets/google-play.png"
import apple from "../../assets/apple.png"
const LastPage = () => {
  return (
    <div className='last-page w-full h-fit bg-slate-300 text-black'>
      <section className='last-section flex justify-end'>
       <div className="first-text">
         <TitleDivider name="A DIGITAL EXPERIENCE"/>
         <h1 className="bigger-h1 bold text-slate-500" style={{fontSize: '3rem'}}>ONE APP FOR ALL <span style={{color: '#06316c'}}>MODON PROPERTIES</span></h1>
         <p className="mb-10 mt-3 regular text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fugiat aliquam unde. Facilis, debitis perferendis sint tenetur suscipit praesentium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, suscipit?</p>
        </div> 
         <div className="icons-last regular text-slate-600">
          <div className="ab flex flex-col gap-4">
           <div className="icon flex gap-2 "><img src={dig} className="h-8 p-1" alt="dig" /> <h1>Construction Updates</h1></div>
           <div className="icon flex gap-2"><img src={document} className="h-8  p-1" alt="dig" /> <h1>Ownership Updates</h1></div>
           <div className="icon flex gap-2"><img src={cardclip} className="h-8 p-1" alt="dig" /> <h1>Access card requests</h1></div>
           <div className="icon flex gap-2"><img src={pingpong} className="h-8 p-1" alt="dig" /> <h1>Amenities booking</h1></div>
          </div>
          <div className="ab flex flex-col gap-4">
           <div className="icon flex gap-2 "><img src={share} className="h-8 p-1" alt="dig" /> <h1>Property-related Transfers</h1></div>
           <div className="icon flex gap-2"><img src={exchange} className="h-8 p-1" alt="dig" /> <h1>Move In/Out Requests</h1></div>
           <div className="icon flex gap-2"><img src={credit} className="h-8 p-1" alt="dig" /> <h1>Online Payments</h1></div>
           <div className="icon flex gap-2"><img src={hand} className="h-8 p-1" alt="dig" /> <h1>ECM & Home services</h1></div>
          </div>
         </div>
         <div className="mt-5 mb-2">
         <TitleDivider name="Download" />
         </div>
         <div className="store-links">
          <a className="store-link" href="https://apps.apple.com/app/modon/id1639703738"><img src={apple} className="h-10" alt="Download IOS" /></a>
          <a className="store-link" href="https://play.google.com/store/apps/details?id=com.my_modon"><img src={google} className="h-10" alt="Download Android" /></a>
         </div>
      </section>
      <section className='last-section2 h-screen'>
          <div className="image-last h-full w-full"></div>
      </section>
    </div>
  )
}

export default LastPage