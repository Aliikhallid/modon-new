// import modonLogo from '../../assets/modonlogo-removebg-preview.png'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const ConstructionHeader = () => {
  const {t} = useTranslation();
  return (
    <div className="construction-updates w-full flex flex-col justify-center items-center">
      {/* <img src={modonLogo} alt="MODON" height={200} width={200} /> */}
      <h1 className='regular text-5xl'>{t("construction-updates")}</h1>
      <div className="constructs flex">
        <div className="construct1 flex flex-col justify-center items-center m-5 regular">
           <div className="buruj-img"></div>
           <h1 className='regular text-3xl m-2'>{t("buruj-c")}</h1>
           <Link to='/buruj-updates'><Button className='bg-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        <div className="construct2 flex flex-col justify-center items-center m-5 regular">
           <div className="future-img"></div>
           <h1 className='regular text-3xl m-2'>{t("future-c")}</h1>
           <Link to='/future-updates'><Button className='bg-primary-color'>{t("see-updates")}</Button></Link>

        </div>
        <div className="construct3 flex flex-col justify-center items-center m-5 regular">
           <div className="lavida-img"></div>
           <h1 className='regular text-3xl m-2'>{t("lavida-c")}</h1>
           <Link to='/lavida-updates'><Button className='bg-primary-color'>{t("see-updates")}</Button></Link>
        </div>
      </div>
        <div className="constructs2 flex">
        <div className="construct2 flex flex-col justify-center items-center m-5 regular">
           <div className="madinaty-img"></div>
           <h1 className='regular text-3xl m-2'>{t("madinaty-c")}</h1>
           <Link to='/madinaty-updates'><Button className='bg-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        <div className="construct3 flex flex-col justify-center items-center m-5 regular">
           <div className="bayti-img"></div>
           <h1 className='regular text-3xl m-2'>{t("bayti-c")}</h1>
           <Link to='/bayti-updates'><Button className='bg-primary-color'>{t("see-updates")}</Button></Link>
        </div>
        </div>
    </div>
  )
}

export default ConstructionHeader