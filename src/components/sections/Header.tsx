// import React from 'react'
// import { useTranslation } from 'react-i18next'
import NavBar from '../NavBar';
import headerVideo from '../../assets/The sustainable environment is the goal of MODON real estate development in Iraq.mp4'
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import FilterComp from '../FilterComp';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';


gsap.registerPlugin(ScrollTrigger);
const Header = () => {
   useEffect(() => {
     gsap.from('.mre', {opacity: 0, y: 100});
     gsap.from('.mi', {opacity: 0, delay: .4});
   }, [])
  // const { t } = useTranslation();
  return (
    <div className='header-container relative h-screen flex justify-center pb-6 items-center flex-col regular'>
      <NavBar />
      <video src={headerVideo} muted autoPlay loop className='video absolute h-[82%] w-screen top-0 left-0 right-0 bottom-0 -z-10 object-cover opacity-30 rounded-b-3xl'></video>
      <div className="overlay absolute h-[82%] w-full top-0 left-0 right-0 bottom-0 object-cover -z-20 bg-black rounded-b-3xl"></div>
      <div className="overlay absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover -z-30 bg-white"></div>
      <div className="paralax relative transitionnn flex w-full flex-col h-1/2 justify-center items-center">
      <h2 className='mi'>Modon, <span className=''>IRAQ</span></h2>
      <h1 className='bold text-6xl m-3 mre'>Modon Real Estate</h1>
      <p className='text-white w-1/2 text-center m-2 light mre'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro temporibus, debitis earum optio veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button variant='ghost' className='text-xl rounded m-2 hover:border-0 mi'>Explore Now <ArrowRightIcon className='explore-ic h-5 w-5' /></Button>
      <div className="btns relative m-3 flex gap-3 justify-center items-center mi">
        <Button variant="default" className='rounded'>Sale</Button>
        <Button variant="secondary" className='rounded'>Rent</Button>
      </div>
      </div>
      <div className="filter-web flex justify-center items-center absolute bottom-0 w-full mi">
       <FilterComp />
      </div>
      {/* <div className="filter-mob flex justify-center items-center w-full">
       <FilterMob />
      </div> */}
      {/* TODO */}
    </div>
  )
}

export default Header