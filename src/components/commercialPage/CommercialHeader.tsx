// import modonLogo from '../../assets/modonlogo-removebg-preview.png'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
// import { useTranslation } from "react-i18next";

const CommercialHeader = () => {
  // const {t} = useTranslation();
  return (
    <div className="construction-updates h-fit w-full flex flex-col justify-center items-center">
      {/* <img src={modonLogo} alt="MODON" height={200} width={200} /> */}
      <div className="constructs flex flex-col my-40 flex-wrap">
      <h1 className='regular text-5xl'>COMMERCIAL PROJECTS</h1>
        <div className="construct1 flex flex-col justify-center items-center m-5 regular">
           <div className="buruj-img"></div>
           <h1 className='regular text-3xl m-2'>BAYTI MALL</h1>
           <p className='light mb-2'>Buruj</p>
           <Link to='/bayti-mall'><Button className='bg-primary-color hover:text-black'>See Project</Button></Link>
        </div>
      </div>
    </div>
  )
}

export default CommercialHeader