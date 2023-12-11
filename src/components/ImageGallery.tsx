import { useEffect, useLayoutEffect, useState } from "react";
import Footer from './Footer/Footer';
import { Button } from "./ui/button";
import NavBar from "./NavBar";
import ImageSliderOverlay from "./ImageSliderOverlay";

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const loadImages = (project: string,lastImage:number) => {
    const path = "../public/ImageGallery/"
    
      const paths = [];
      for (let i = 1; i <= lastImage; i++) {
        paths.push(`${path}/${project}/${i}.webp`);
      }
      setImagePaths(paths);
    
    
  };

  const handleButtonClick = (year: string,lastImage:number) => {
    loadImages(year,lastImage);
  };
  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
function goBack() {
  window.history.back();
}

  useEffect(()=>{
    handleButtonClick("BA",12)
  },[])

  useEffect(() => {
    // Set the initial screen width
    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="bg-white w-full h-fit flex flex-col justify-center items-center relative">
      <NavBar />
      <div className="ob h-40 w-full bg-primary-color"></div>
    <h1 className='regular text-5xl relative mt-20 text-primary-color text-center'>IMAGE GALLERY</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns text-center">
         <Button className='m-2 upBtn md:w-max w-full' onClick={()=>handleButtonClick("BA",12)}>BAYTI</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={()=>handleButtonClick("BU",12)}>BURUJ</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={()=>handleButtonClick("FU",8)}>FUTURE CITY</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={()=>handleButtonClick("LA",12)}>LAVIDA</Button>
         <Button className='m-2 upBtn md:w-max w-full' onClick={()=>handleButtonClick("MA",12)}>MADINATY</Button>
        </div>
         <div className={`${screenWidth >= 1000? 'gallary-container mb-[20%]':'flex flex-wrap justify-center gap-10 mt-5'}`}>
          {imagePaths.map((p,index) =>(<div key={index} className={`${screenWidth >= 1000? 'gallary-img h-[16rem] w-[18rem]':'buruj-img animate-fade-down  animate-duration-1000 animate-delay-500'}  clickable`} onClick={() => handleImageClick(index)} style= {{background: `url(${p}) no-repeat center center/cover` }} ></div>))}
         </div>
        <Button onClick={goBack} className='hover-black w-40 mt-4 upBtn'>Previous Page</Button>
         </div>
         </div>
         <Footer />
         {selectedImageIndex !== null && (
        <ImageSliderOverlay imgUrls={imagePaths} selectedImage={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex}  />
      )}
         </div> 
  )
}

export default ImageGallery