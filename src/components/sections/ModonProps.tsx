import { Button } from '../ui/button'
import TitleDivider from './TitleDivider'
import { Link } from 'react-router-dom'
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);
const ModonProps = () => {
  useEffect(() => {
    gsap.from('.image-1', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, height: 0, width: 0, ease: 'circ.inOut', duration: 1})
    gsap.from('.image-2', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, height: 0, width: 0, ease: 'circ.inOut', duration: 1})
    gsap.from('.image-3', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, height: 0, width: 0, ease: 'circ.inOut', duration: 1})
    gsap.from('.image-4', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, height: 0, width: 0, ease: 'circ.inOut', duration: 1})
    gsap.from('.image-5', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, height: 0, width: 0, ease: 'circ.inOut', duration: 1})
    gsap.from('.modon-text-container', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 30%',
    }, opacity: 0, x: -200, ease: 'circ.inOut'})
    gsap.from('.text-appear', {scrollTrigger: {
      trigger: '.image-3',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, opacity: 0,ease: 'circ.inOut', delay: 1.5})
  })
  return (
    <div className='modon-container w-full h-fit bg-white text-black'>
      <section className='modon-text-container'>
      <TitleDivider name="MODON" />
        <h1 className='latest italic'>LATEST PROPERTIES</h1>
        <p className='light my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae facilis fuga sequi impedit at eum quisquam dignissimos, velit quia?</p>
        <Button className='bg-indigo-950 text-white rounded hover:text-black'>VIEW ALL</Button>
      </section>
      <section className='images-container regular'>
          <div className="images-container-one">
          <div>
       <Link to="/madinaty/cadi" className='cursor-pointer'> 
           <div className="image image-1 clickable"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg text-appear'>CADI · MADINATY</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light text-appear'>type: Villas</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/bayti/narjis" className='cursor-pointer'> 
           <div className="image image-2 clickable"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-md text-appear'>NARJIS · MADINATY</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light text-appear'>type: Villas</h1>
           </div>
        </Link>
          </div>
        </div>
        <div className="images-container-two">
        <div>
       <Link to="/madinaty/apartments" className='cursor-pointer'> 
           <div className="image image-3 clickable"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg text-appear'>APARTMENTS</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light text-appear'>type: Apartments</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/bayti/lotus" className='cursor-pointer'> 
           <div className="image image-4 clickable"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg text-appear'>LOTUS · BAYTI</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light text-appear'>type: Villas</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/bayti/jory" className='cursor-pointer'> 
           <div className="image image-5 clickable"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg text-appear'>JORY · BAYTI</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light text-appear'>type: Villas</h1>
           </div>
        </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModonProps