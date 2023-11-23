import TitleDivider from './TitleDivider'
import ImageSlider from '../ImageSlider';

const ModonSlider = () => {


  const path = "ProjectsBuldingCat/"
    const loadImages = (project: string,lastImage:number) => {
      
      const paths = [];
      for (let i = 0; i <= lastImage; i++) {
        paths.push(`${path}/${project}/${i}.jpg`);
      }
      return paths;
      
    };
    
    

  return (
    <div className='main-slider-container h-fit w-full text-black bg-white relative overflow-x-hidden'>
      <div className='top-slider'>
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