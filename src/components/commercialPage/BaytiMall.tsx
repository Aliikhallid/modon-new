import { useLayoutEffect } from 'react';
import NavBar from '../NavBar'
import Footer from '../sections/Footer'
import { Button } from '../ui/button'
// import { useTranslation } from "react-i18next";

const BaytiMall = () => {
  // const {t} = useTranslation();
  function goBack() {
    window.history.back();
  }
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="bg-white h-fit w-full flex flex-col justify-center items-center">
      <NavBar />
      <div className="ob h-40 w-full bg-primary-color"></div>
      <div className="constructs flex flex-col my-20 flex-wrap items-center">
      <h1 className='regular text-5xl text-center text-primary-color'>BAYTI MALL</h1>
        <div className="construct1 flex flex-wrap gap-10 justify-center items-center m-5 regular">
           <div className="bayti-mall-img1"></div>
           <div className="bayti-mall-img2"></div>
           <div className="bayti-mall-img3"></div>
        </div>
        <Button onClick={goBack} className='hover-black w-40'>Previous Page</Button>
      </div>
      <Footer />
    </div>
  )
}
export default BaytiMall