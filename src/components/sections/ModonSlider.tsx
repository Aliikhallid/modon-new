import TitleDivider from './TitleDivider'
import ImageSlider from '../ImageSlider';
import CountUp from 'react-countup';
const ModonSlider = () => {
  
  const path = "../ProjectsBuldingCat/"
  const loadImages = (project: string,lastImage:number) => {
    
    const paths = [];
    for (let i = 0; i <= lastImage; i++) {
      paths.push(`${path}/${project}/${i}.jpg`);
    }
    return paths;
    
  };

    

  return (
    <div className='main-slider-container h-fit w-full text-black bg-slate-300 relative overflow-x-hidden'>
      <h1 className='text-3xl text-slate-500 text-center bold w-full relative top-10'><span className='text-primary-color'>MODON · </span>Real Estate  <CountUp end={5} duration={1} delay={1}/> Projects</h1>
      <div className='top-slider tdxx'>
      <TitleDivider name="PROJECTS"  />
      <div className="flex flex-col h-fit w-full py-5 justify-center items-center text-center">
      <h1 className="text-3xl text-primary-color w-full slider-btn">
      <ImageSlider imgUrls={loadImages("ProjectsDisplay",4)} imgOverText={["Bayti","Buruj","Future City","Madinaty","Lavida"]} />
      </h1>
      </div>
    </div>
    </div>
  )
}

export default ModonSlider