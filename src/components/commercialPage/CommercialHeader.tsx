// import modonLogo from '../../assets/modonlogo-removebg-preview.png'
import { useLayoutEffect } from 'react';
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
// import { useTranslation } from "react-i18next";

const CommercialHeader = () => {
  // const {t} = useTranslation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="bg-white h-fit w-full flex flex-col justify-center items-center">
      <div className="ob h-40 w-full bg-primary-color"></div>
      {/* <img src={modonLogo} alt="MODON" height={200} width={200} /> */}
      <div className="constructs flex flex-col my-20 flex-wrap">
      <h1 className='regular md:text-5xl text-3xl text-center text-primary-color'>COMMERCIAL PROJECTS</h1>
        <div className="construct1 flex flex-col justify-center items-center m-5 regular">
           <div className="bayti-mall-img"></div>
           <h1 className='regular md:text-3xl text-2xl m-2 text-primary-color'>BAYTI MALL</h1>
           <p className='light mb-2 text-black'>Buruj</p>
           <Link to='bayti-mall'><Button className='bg-primary-color hover:text-black'>See Project</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default CommercialHeader