import { Button } from './ui/button'
import TitleDivider from './TitleDivider'

const ModonProps = () => {
  return (
    <div className='emaar-container w-full bg-white text-black'>
      <section className='emaar-text-container'>
      <TitleDivider name="MODON" />
        <h1 className='latest light-italic'>LATEST PROPERTIES</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque beatae facilis fuga sequi impedit at eum quisquam dignissimos, velit quia?</p>
        <Button className='bg-indigo-950 text-white'>VIEW ALL</Button>
      </section>
      <section className='images-container'>
        <div className="images-container-one">
          <div>
           <div className="image image-1"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1>LAVIDA</h1>
            <div className="vertical-divider"></div>
           </div>
          </div>
          <div>
           <div className="image image-2"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1>MADINATY</h1>
            <div className="vertical-divider"></div>
           </div>
          </div>
        </div>
        <div className="images-container-two">
        <div>
           <div className="image image-3"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1>FUTURE CITY</h1>
            <div className="vertical-divider"></div>
           </div>
          </div>
          <div>
           <div className="image image-4"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1>BAYTI</h1>
            <div className="vertical-divider"></div>
           </div>
          </div>
          <div>
           <div className="image image-5"></div>
           <div className='flex justify-start items-center' style={{margin: "1rem"}}>
            <h1>BURUJ</h1>
            <div className="vertical-divider"></div>
           </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ModonProps