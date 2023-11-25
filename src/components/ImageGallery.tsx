import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "./sections/Footer";
import { Button } from "./ui/button";
import NavBar from "./NavBar";

const ImageGallery = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);
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
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
function goBack() {
  window.history.back();
}

  useEffect(()=>{
    handleButtonClick("BA",20)
  },[])
  return (
    <div className="bg-primary-multiply-color w-full h-fit flex flex-col justify-center items-center relative">
      <NavBar />
    <h1 className='regular text-5xl relative mt-40'>IMAGE GALLERY</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("BA",12)}>BAYTI</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("BU",12)}>BURUJ</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("FU",17)}>FUTURE CITY</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("LA",11)}>LAVIDA</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("MA",11)}>MADINATY</Button>
        </div>
         <div className="flex flex-wrap justify-center gap-10 mt-5">
          {imagePaths.map((p,index) =>(<div key={index} className="buruj-img animate-fade-down animate-duration-1000 animate-delay-500" style= {{backgroundImage: `url(${p})`}}></div>))}
         </div>
        <Button onClick={goBack} className='hover-black w-40 mt-4 upBtn'>Previous Page</Button>
         </div>
         </div>
         <Footer />
         </div> 
  )
}

export default ImageGallery