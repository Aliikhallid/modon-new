// import React from 'react'
// import { useTranslation } from 'react-i18next'
import NavBar from '../NavBar';
import headerVideo from '../../assets/The sustainable environment is the goal of MODON real estate development in Iraq.mp4'
import { Button } from '../ui/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import FilterComp from '../FilterComp';




const Header = () => {
  return (
    <div className='header-container relative h-screen flex flex-col regular'>
      <NavBar />
      <video src={headerVideo} muted autoPlay loop className='video absolute h-screen w-screen top-0 left-0 right-0 bottom-0 -z-10 object-cover opacity-30'></video>
      <div className="overlay absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover -z-20 bg-black"></div>
      <h1>Modon, <span className=''>IRAQ</span></h1>
      <h1 className='regular text-6xl m-1'>Explore Modon Properties</h1>
      <p className='text-gray-400 w-1/2 text-center m-3 light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At porro temporibus, debitis earum optio veritatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi aut iste dicta sapiente! A!</p>
      <Button className='exp-btn text-primary-color'>Explore Now <ArrowRightIcon className='explore-ic' /></Button>
      <FilterComp />
      <Button className='exp-btn text-md bg-slate-100 text-primary-color'>Explore Now <ArrowRightIcon className='explore-ic' /></Button>
      <div className="props-filter-container bg-white text-black light w-11/12">
        <div className="props-filter-one flex border-r border-gray-500 border-solid m-4 text-left w-1/5 relative">
          <section className='mr-10'>
          <h2>{t("property_type")}</h2>
          <p>{t("any")}</p>
          </section>
        </div>
        <div className="props-filter-two flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
         <section className='mr-10'>
          <h2>{t("bedrooms")}</h2>
          <p>{t("any")}</p>
         </section> 
        </div>
        <div className="props-filter-three flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
          <section className='mr-10'>
          <h2>{t("price_range")}</h2>
          <p>{t("any")}</p>
          </section>
        </div>
        <div className="props-filter-four flex border-r border-gray-500 border-solid m-4 text-left w-1/5">
          <section className='mr-10'>
          <h2>{t("community")}</h2>
          <p>{t("all_communities")}</p>
          </section>
        </div>
        <div className="props-filter-button m-4 text-center w-1/5">
          <Button className='bg-modon-blue text-white text-lg hover:text-black rounded w-full'>{t("search_properties")}</Button>
        </div>
      </div>
    </div>
  )
}

export default Header