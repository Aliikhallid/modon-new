// import modonLogo from '../../assets/modonlogo-removebg-preview.png'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const ConstructionHeader = () => {
  const {t} = useTranslation();
  return (
    <div className="construction-updates w-full flex flex-col justify-center items-center bg-primary-multiply-color text-white">
      {/* <img src={modonLogo} alt="MODON" height={200} width={200} /> */}
      <h1 className='regular text-5xl mb-5'>{t("construction-updates")}</h1>
      <div className="constructs flex flex-wrap gap-7 justify-center items-center">
        <div className="construct1 flex flex-col justify-center items-center m-5 regular">
           <div className="buruj-img shadow-2xl"></div>
           <h1 className='regular text-3xl m-2'>{t("buruj-c")}</h1>
           <Link to='/modon-new/buruj-updates'><Button variant="default" className='hover:text-white'>{t("see-updates")}</Button></Link>
        </div>
        <div className="construct2 flex flex-col justify-center items-center m-5 regular">
           <div className="future-img"></div>
           <h1 className='regular text-3xl m-2'>{t("future-c")}</h1>
           <Link to='/modon-new/future-updates'><Button className='hover-primary-color'>{t("see-updates")}</Button></Link>

        </div>
        <div className="construct3 flex flex-col justify-center items-center m-5 regular">
           <div className="lavida-img"></div>
           <h1 className='regular text-3xl m-2'>{t("lavida-c")}</h1>
           <Link to='/modon-new/lavida-updates'><Button className='hover-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        <div className="construct4 flex flex-col justify-center items-center m-5 regular">
           <div className="madinaty-img"></div>
           <h1 className='regular text-3xl m-2'>{t("madinaty-c")}</h1>
           <Link to='/modon-new/madinaty-updates'><Button className='hover-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        <div className="construct5 flex flex-col justify-center items-center m-5 regular">
           <div className="bayti-img"></div>
           <h1 className='regular text-3xl m-2'>{t("bayti-c")}</h1>
           <Link to='/modon-new/bayti-updates'><Button className='hover-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        </div>
    </div>
  )
}

export default ConstructionHeader