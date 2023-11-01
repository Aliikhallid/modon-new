// import React from 'react'

import TitleDivider from "./TitleDivider"

const LastPage = () => {
  return (
    <div className='last-page h-screen w-full bg-black text-white'>
      <section className='last-section w-1/2 flex justify-end'>
        <div className="first-text">
         <TitleDivider name="A DIGITAL EXPERIENCE"/>
         <h1 className="bigger-h1 regular" style={{fontSize: '3rem'}}>ALL ABOUT <span style={{color: 'steelblue'}}>MODON</span></h1>
         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nam fugiat aliquam unde. Facilis, debitis perferendis sint tenetur suscipit praesentium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, suscipit?</h1>
        </div>
         <div className="icons-last">
          <div className="ab">
           <div className="icon">A</div>
           <div className="icon">B</div>
          </div>
          <div className="cd">
           <div className="icon">C</div>
           <div className="icon">D</div>
          </div>
         </div>
         <div className="store-links">
          <div className="store-link">E</div>
          <div className="store-link">F</div>
          <div className="store-link">G</div>
         </div>
      </section>
      <section className='last-section2 w-1/2'>
          <div className="image-last rounded-t-full m-3"></div>
      </section>
    </div>
  )
}

export default LastPage