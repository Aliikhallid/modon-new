import { Button } from "../ui/button"
import NavBar from "../NavBar"
import { useEffect, useState } from "react";
const MadinatyUpdates = () => {
  const path = "src/assets/ConstructionUpdates/Madinaty/"
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

  useEffect(()=>{
    handleButtonClick("2016","July",17)
  },[])
  return (
    <div className="buruj-updates w-full h-fit flex flex-col justify-start items-center relative">
      <NavBar />
    {/* <img src={burujLogo} alt="MODON" height={200} width={200} /> */}
    <h1 className='regular text-5xl relative mt-40'>MADINATY UPDATES</h1>
    <div className="constructs flex">
      <div className="construct1 flex flex-col justify-center items-center m-5">
        <div className="buruj-btns">
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2016","July",17)}>July 2016</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2016","August",4)}>August 2016</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2016","October",4)}>October 2016</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2018","October",6)}>October 2018</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2019","February",4)}>February 2019</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2019","April",8)}>April 2019</Button>
         <Button className='bg-primary-color m-2' onClick={()=>handleButtonClick("2023","August",11)}>August 2023</Button>



        </div>
         <div className="flex flex-wrap justify-center gap-10 mt-5">
          {imagePaths.map((p,index) =>(<div key={index} className="buruj-img animate-fade-down animate-duration-1000 animate-delay-500" style= {{backgroundImage: `url(${p})`}}></div>))}
         </div>
         </div>
         </div>
         </div> 
        
  )
}

export default MadinatyUpdates