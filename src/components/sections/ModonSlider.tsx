import TitleDivider from '../TitleDivider'
import arrowRight from '../../assets/arrow-right.png'
import arrowLeft from '../../assets/arrow-left.png'

const ModonSlider = () => {

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const slider = document.querySelector('.slider-container');
  slider?.classList.add('transitionn');

    next?.addEventListener('click', ()=> {
      if(document.documentElement.lang === 'en') {
        slider?.classList.add('scooch');
      }
      else {
        slider?.classList.add('scooch-ar');
      }
    })
    prev?.addEventListener('click', ()=> {
      if(document.documentElement.lang === 'en') {
        slider?.classList.remove('scooch');
      } else {
        slider?.classList.remove('scooch-ar')
      }
    })
  return (
    <div className='main-slider-container h-screen w-full text-black bg-white relative overflow-x-hidden'>
      <div className='top-slider'>
      <TitleDivider name="MODON PROPS"  />
      <div className="slider-btns flex">
        <img src={arrowLeft} alt="next" className='prev m-1 cursor-pointer h-6' />
        <img src={arrowRight} alt="prev" className='next m-1 cursor-pointer h-6' />
      </div>
      </div>
      <div className="slider-container overflow-x-hidden regular">
        <div className="slide z-20 text-primary-color">
          <div className="slide-img"></div>
          <h1 className="slide-title m-1">Buruj Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-primary-color">
          <div className="slide-img slide-img2"></div>
          <h1 className="slide-title m-1">Lavida Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-primary-color">
           <div className="slide-img slide-img3"></div>
           <h1 className="slide-title m-1">Future City Units</h1>
           <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
           <p className='slide-parag'>Lorem, ipsum.</p>
         </div>
        <div className="slide z-20 text-primary-color">
          <div className="slide-img slide-img4"></div>
          <h1 className="slide-title m-1">Madinaty Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
        <div className="slide z-20 text-primary-color">
          <div className="slide-img slide-img5"></div>
          <h1 className="slide-title m-1">Baity Units</h1>
          <p className='slide-parag'>Lorem ipsum dolor sit amet.</p>
          <p className='slide-parag'>Lorem, ipsum.</p>
        </div>
      </div>
      <div className="bottom-overlay h-1/2 w-full absolute bottom-0 z-10"></div>
    </div>
  )
}

export default ModonSlider