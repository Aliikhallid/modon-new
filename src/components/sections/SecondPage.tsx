import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


const SecondPage = () => {
  useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from('.mrx', {scrollTrigger: {
        trigger: '.mrx',
        toggleActions: 'play none none reverse',
        start: 'top 70%',
      },opacity: 0, y: 100});
      gsap.from('.mrx2', {scrollTrigger: {
        trigger: '.mrx2',
        toggleActions: 'play none none reverse',
        start: 'top 70%'
      },opacity: 0, y: 100});
      gsap.from('.mrx3', {scrollTrigger: {
        trigger: '.mrx3',
        toggleActions: 'play none none reverse',
        start: 'top 70%'
      },opacity: 0, y: 100});
    // gsap.from('.mi', {opacity: 0, delay: .4});
  }, [])
  return (
    <div className="w-full h-fit md:pt-16 pt-36 bg-slate-300 text-slate-600 flex flex-wrap justify-center light">
      <div className="link-cont m-5 flex flex-col justify-center items-center mrx">
        <div className="link-img"></div>
        <h1 className="regular text-center text-primary-color">Resedential Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
       <Link to='/construction'><Button className="bg-primary-color text-white hover:text-primary-color">See More</Button></Link>
      </div>
      <div className="link-cont m-5 flex flex-col justify-center items-center mrx2">
        <div className="link-img"></div>
        <h1 className="regular text-center text-primary-color">Commercial Projects</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Link to='/commercial'><Button className="bg-primary-color text-white hover:text-primary-color">See More</Button></Link>
      </div>
      <div className="link-cont m-5 flex flex-col justify-center items-center mrx3">
        <div className="link-img"></div>
        <h1 className="regular text-center text-primary-color">Current Offers</h1>
        <p className="w-3/4 m-2 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, animi.</p>
        <Button className="bg-primary-color text-white hover:text-primary-color">See More</Button>
      </div>
      </div>
  )
}

export default SecondPage