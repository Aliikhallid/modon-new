// import React from 'react'
// import { useTranslation } from 'react-i18next'
import NavBar from './NavBar';
import headerVideo from '../assets/The sustainable environment is the goal of MODON real estate development in Iraq.mp4'
import { Button } from './ui/button';
import {useTranslation} from 'react-i18next'




const Header = () => {
  const {t} = useTranslation();

  return (
    <div className='header-container relative h-screen flex flex-col regular'>
      <NavBar />
      <video src={headerVideo} muted autoPlay loop className='video absolute h-screen w-screen top-0 left-0 right-0 bottom-0 -z-10 object-cover opacity-50'></video>
      <div className="overlay absolute h-full w-full top-0 left-0 right-0 bottom-0 object-cover -z-20 bg-black"></div>
      {/* <div className="props-filter-container">
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
          <Button className='bg-teal-700 rounded w-full' size={'lg'}>{t("search_properties")}</Button>
        </div>
      </div> */}
    </div>
  )
}

export default Header