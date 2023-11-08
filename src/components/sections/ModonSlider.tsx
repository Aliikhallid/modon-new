import TitleDivider from './TitleDivider'
// import arrowRight from '../../assets/arrow-right.png'
// import arrowLeft from '../../assets/arrow-left.png'
import ImageSlider from '../ImageSlider';

const ModonSlider = () => {

  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  const slider = document.querySelector('.slider-container');
  slider?.classList.add('transitionn');

    next?.addEventListener('click', ()=> {
      if(document.documentElement.lang === 'en') {
        slider?.classList.add('scooch');
      }
      else {
        slider?.classList.add('scooch-ar');
      }
    })
    prev?.addEventListener('click', ()=> {
      if(document.documentElement.lang === 'en') {
        slider?.classList.remove('scooch');
      } else {
        slider?.classList.remove('scooch-ar')
      }
    })
    const loadImages = (project: string,lastImage:number) => {
      const path = "/src/assets/ProjectsBuldingCat/"
      
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
      <h1 className="text-3xl text-primary-color w-full">
      <ImageSlider imgUrls={loadImages("ProjectsDisplay",4)} imgOverText={["Bayti","Buruj","Future City","Madinaty","Lavida"]} />
      </h1>
    </div>
    </div>
    </div>
  )
}

export default ModonSlider