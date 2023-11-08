import { Button } from '../ui/button'
import TitleDivider from './TitleDivider'
import { Link } from 'react-router-dom'
const ModonProps = () => {
  console.log(window.innerWidth)
  return (
    <div className='modon-container w-full h-fit bg-white text-black'>
      <section className='modon-text-container'>
      <TitleDivider name="MODON" />
        <h1 className='latest regular'>LATEST PROPERTIES</h1>
        <p className='light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae facilis fuga sequi impedit at eum quisquam dignissimos, velit quia?</p>
        <Button className='bg-indigo-950 text-white hover:text-black'>VIEW ALL</Button>
      </section>
      <section className='images-container regular'>
          <div className="images-container-one">
          <div>
       <Link to="/modon-new/madinaty/cadi" className='cursor-pointer'> 
           <div className="image image-1"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg'>CADI - MADINATY</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light'>type: Villas</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/modon-new/madinaty/narjis" className='cursor-pointer'> 
           <div className="image image-2"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg'>NARJIS - MADINATY</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light'>type: Villas</h1>
           </div>
        </Link>
          </div>
        </div>
        <div className="images-container-two">
        <div>
       <Link to="/modon-new/madinaty/apartments" className='cursor-pointer'> 
           <div className="image image-3"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg'>APARTMENTS</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light'>type: Apartments</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/modon-new/bayti/lotus" className='cursor-pointer'> 
           <div className="image image-4"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg'>LOTUS - BAYTI</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light'>type: Villas</h1>
           </div>
        </Link>
          </div>
          <div>
       <Link to="/modon-new/bayti/jory" className='cursor-pointer'> 
           <div className="image image-5"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1 className='text-lg'>JORY - BAYTI</h1>
            <div className="vertical-divider"></div>
            <h1 className='text-xs m-2 light'>type: Villas</h1>
           </div>
        </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModonProps