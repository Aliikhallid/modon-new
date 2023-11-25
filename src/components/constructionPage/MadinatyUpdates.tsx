import { Button } from "../ui/button"
import NavBar from "../NavBar"
import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../sections/Footer";
import ImageSliderOverlay from "../ImageSliderOverlay";
const MadinatyUpdates = () => {
  const path = "ConstructionUpdates/Madinaty/"
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [month, setMonth] = useState('July - 2016');


  const loadImages = (year: string,month:string,lastImage:number) => {
    
      const paths = [];
      for (let i = 0; i <= lastImage; i++) {
        paths.push(`${path}/${year}/${month}/${i}.webp`);
      }
      setImagePaths(paths);
      setMonth(`${month} - ${year}`)

  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleButtonClick = (year: string,month:string,lastImage:number) => {
    loadImages(year,month,lastImage);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
function goBack() {
  window.history.back();
}

  useEffect(()=>{
    handleButtonClick("2016","July",17)
  },[])
  return (
    <div className="bg-white w-full h-fit flex flex-col justify-start items-center relative">
      <NavBar />
      <div className="ob h-40 w-full bg-primary-color"></div>
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-20 text-primary-color'>MADINATY UPDATES</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2016","July",17)}>July 2016</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2016","August",4)}>August 2016</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2016","October",4)}>October 2016</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2018","October",6)}>October 2018</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2019","February",4)}>February 2019</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2019","April",8)}>April 2019</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2023","August",11)}>August 2023</Button>



        </div>
         <div className="flex flex-wrap justify-center gap-10 mt-5">
          {imagePaths.map((p,index) =>(<div key={index} className="buruj-img animate-fade-down animate-duration-1000 clickable animate-delay-500" onClick={()=>handleImageClick(index)} style= {{backgroundImage: `url(${p})`}}></div>))}
         </div>
        <Button onClick={goBack} className='hover-black w-40 mt-4 upBtn'>Previous Page</Button>
         </div>
         </div>
         <Footer />
         {selectedImageIndex !== null && (
        <ImageSliderOverlay imgUrls={imagePaths} selectedImage={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} imgText={Array(imagePaths.length).fill(`Madinaty ${month}`)}  />
      )}
         </div> 
        
  )
}

export default MadinatyUpdates