import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);
const ModonDesc = () => {
  useEffect(() => {
    gsap.from('.desc-t', {scrollTrigger: {
      trigger: '.desc-t',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
    }, opacity: 0, x: -200})
    gsap.from('.sld-image', {scrollTrigger: {
      trigger: '.sld-image',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
    }, opacity: 0, x: -200, delay: 1})
    gsap.from('.sld-border', {scrollTrigger: {
      trigger: '.sld-border',
      toggleActions: 'play none none reverse',
      start: 'top 70%',
    }, height: 0, width: 0, duration: 1, ease: 'back.inOut'})
    gsap.from(['.desc-tt', '.desc-p'], {scrollTrigger: {
      trigger: '.desc-tt',
      toggleActions: 'play none none reverse',
      start: 'top 80%',
    }, opacity: 0, y: 200})
  }, [])
  return (
    <div className="h-fit bg-slate-300 w-full flex modon-desc">
      <section className="w-1/2 h-[110vh] flex flex-col justify-center items-center desc1">
        <h1 className="bold text-primary-color text-4xl m-5 text-center desc-t">World-Class Service And Market-Leading Expertise</h1>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="bold text-primary-color text-2xl m-3 desc-tt">Mission</h1>
          <h1 className="bold text-primary-color text-2xl m-3 desc-tt">Vision</h1>
        </div>
        <div className="sc-desc w-full flex justify-around items-center">
          <h1 className="regular text-primary-color text-lg mx-10 desc-p">To be the first real estate developer in Iraq that gives its customers complete satisfaction and added value to its real estate services, to be an Iraqi real estate icon that changes the urbanization map towards a new and integrated concept of a unique housing experience that links with its customers with close bonds based on loyalty and distinguished service in the after-sales stage.</h1>
          <h1 className="regular text-primary-color text-lg mx-10 desc-p">Making a continuous and permanent change to the real estate map of Iraq, developing mini-cities with an integrated service nature, and achieving inclusion through a unique experience of owning a dream home.</h1>
        </div>
      </section>
      <section className="w-1/2 h-[110vh] flex justify-center items-center relative desc2">
        <div className="sld-image h-[90%] w-3/4 relative rounded-t-full"></div>
        <div className="sld-border border h-[90%] w-3/4 rounded-t-full absolute left-16 top-10 border-primary-color"></div>
      </section>
    </div>
  )
}

export default ModonDesc