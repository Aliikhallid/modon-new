// import React from 'react'
// import { useTranslation } from 'react-i18next'
import NavBar from '../NavBar';
import headerVideo from '../../assets/The sustainable environment is the goal of MODON real estate development in Iraq.mp4'
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import FilterComp from '../FilterComp';
// import { useTranslation } from 'react-i18next';




const Header = () => {
  console.log(window.innerWidth);
  // const { t } = useTranslation();
  return (
    <div className='header-container relative h-screen flex flex-col regular'>
      <NavBar />
      <video src={headerVideo} muted autoPlay loop className='video absolute h-screen w-screen top-0 left-0 right-0 bottom-0 -z-10 object-cover opacity-30'></video>
      <div className="overlay absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover -z-20 bg-black"></div>
      <div className="paralax relative transitionnn flex w-full flex-col h-1/2 justify-end items-center">
      <h2>Modon, <span className=''>IRAQ</span></h2>
      <h1 className='regular text-6xl m-1'>Explore Modon Properties</h1>
      <p className='text-gray-400 w-1/2 text-center light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro temporibus, debitis earum optio veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi aut iste dicta sapiente! A!</p>
      <Button size="default" className='text-md bg-slate-200 rounded text-primary-color m-5'>Explore Now <ArrowRightIcon className='explore-ic' /></Button>
      </div>
          <FilterComp />
    </div>
  )
}

export default Header