import { Button } from "../ui/button"
import NavBar from "../NavBar"
import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../sections/Footer";

const BaytiUpdates = () => {
  const path = "ConstructionUpdates/Bayti/"
  const [imagePaths, setImagePaths] = useState<string[]>([]);
  const loadImages = (year: string,month:string,lastImage:number) => {
    
      const paths = [];
      for (let i = 0; i <= lastImage; i++) {
        paths.push(`${path}/${year}/${month}/${i}.webp`);
      }
      setImagePaths(paths);
    
    
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
    handleButtonClick("2018","July",20)
  },[])
  return (
    <div className="bg-primary-multiply-color w-full h-fit flex flex-col justify-center items-center relative">
      <NavBar />
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-40'>BAYTI UPDATES</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2018","July",20)}>July 2018</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2021","October",12)}>October 2021</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2022","January",11)}>January 2022</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2022","February",17)}>February 2022</Button>
         <Button className='m-2 upBtn' onClick={()=>handleButtonClick("2023","August",11)}>August 2023</Button>
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

export default BaytiUpdates