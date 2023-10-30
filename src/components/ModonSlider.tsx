// import React from 'react'
import TitleDivider from './TitleDivider'
// import 'react-slideshow-image/dist/styles.css'


const ModonSlider = () => {
  

  return (
    <div className='main-slider-container h-screen w-full text-black bg-white relative overflow-x-hidden'>
      <div className='top-slider'>
      <TitleDivider name="Modon Props"  />
      <div className="slider-btns flex">
        <h1 className='m-1 cursor-pointer next'>prev</h1>
        <h1 className='m-1 cursor-pointer prev'>next</h1>
      </div>
      </div>
      <div className="slider-container">
        <div className="slide z-20 text-white">
          <div className="slide-img"></div>
          <h1 className="slide-title">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-white">
          <div className="slide-img"></div>
          <h1 className="slide-title">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-white">
          <div className="slide-img"></div>
          <h1 className="slide-title">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-white">
          <div className="slide-img"></div>
          <h1 className="slide-title">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-white">
          <div className="slide-img"></div>
          <h1 className="slide-title">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="bottom-overlay h-1/2 w-full absolute bottom-0 z-10 bg-black"></div>
    </div>
  )
}

export default ModonSlider