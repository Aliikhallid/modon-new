import { Button } from "../ui/button"
import NavBar from "../NavBar"
import { useEffect, useLayoutEffect, useState } from "react";
import Footer from "../sections/Footer";
const BurujUpdates = () => {
  const path = "src/assets/ConstructionUpdates/Buruj/"
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

  useEffect(()=>{
    handleButtonClick("2021","October",18)
  },[])
  function goBack() {
    window.history.back();
  }

  return (
    <div className="buruj-updates w-full h-fit flex flex-col justify-start items-center relative">
      <NavBar />
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-40'>BURUJ UPDATES</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2021","October",18)}>October 2021</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2021","December",7)}>December 2021</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2022","January",4)}>January 2022</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2022","February",15)}>February 2022</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2022","March",19)}>March 2022</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2022","April",6)}>April 2022</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2022","May",49)}>May 2022</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2023","August",11)}>August 2023</Button>

        </div>
         <div className="flex flex-wrap justify-center gap-10 mt-5">
          {imagePaths.map((p,index) =>(<div key={index} className="buruj-img animate-fade-down animate-duration-1000 animate-delay-500" style= {{backgroundImage: `url(${p})`}}></div>))}
         </div>
        <Button onClick={goBack} className='hover-black w-40 mt-4'>Previous Page</Button>
         </div>
         </div>
         <Footer />
         </div> 
        
  )
}

export default BurujUpdates