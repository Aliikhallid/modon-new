import NavBar from '../NavBar'
import Footer from '../sections/Footer'
import { Button } from '../ui/button'
// import { useTranslation } from "react-i18next";

const BaytiMall = () => {
  // const {t} = useTranslation();
  function goBack() {
    window.history.back();
  }
  return (
    <div className="construction-updates h-fit w-full flex flex-col justify-center items-center">
      <NavBar />
      <div className="constructs flex flex-col my-40 flex-wrap">
      <h1 className='regular text-5xl text-center'>BAYTI MALL</h1>
        <div className="construct1 flex flex-col justify-center items-center m-5 regular">
           <div className="bayti-mall-im1"></div>
           <div className="bayti-mall-im2"></div>
           <div className="bayti-mall-im3"></div>
        </div>
        <Button onClick={goBack} className='hover-black'>Previous Page</Button>
      </div>
      <Footer />
    </div>
  )
}
export default BaytiMall