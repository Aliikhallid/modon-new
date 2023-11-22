import { useTranslation } from "react-i18next";
import NavBar from "../NavBar";
import { Button } from "../ui/button";
import ProjectCard from "./projectCard";
import { Castle, School2, Car, Building, Plane } from "lucide-react";
// import { useLayoutEffect } from "react";
import Enquire from "../sections/Enquire";
import Footer from "../sections/Footer";
import { useState } from "react";
import CountUp from "react-countup";
import GroundFloor from '../../assets/gardenia-groundfloor.webp'
import FirstFloor from '../../assets/gardenia-firstfloor.webp'
import { useLayoutEffect } from "react";
import ImageSlider from "../ImageSlider";

const Gardenia = () => {
  const {t,i18n} = useTranslation();
  const isRTL = i18n.language === "ar"
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
const [overviewP, setOverview] = useState('') 
const [title, setTitle] = useState('Ground Floor (117.95)M2')
const [overviewP2, setOverview2] = useState('Rooms')
const [t1, setT1] = useState('Reception');
const [t2, setT2] = useState('Living Room');
const [t3, setT3] = useState('Guest Room');
const [t4, setT4] = useState('Kitchen');
const [t5, setT5] = useState('Bathroom');
const [t6, setT6] = useState('Bathroom 2');
const [t7, setT7] = useState('Bedroom 1');
const [t8, setT8] = useState('Bedroom 2');
const [t9, setT9] = useState('WC');
const [d1, setD1] = useState('2.8 M x 2.4 M');
const [d2, setD2] = useState('4.4 M x 3.9 M');
const [d3, setD3] = useState('5.3 M x 4.9 M');
const [d4, setD4] = useState('4.2 M x 4.0 M');
const [d5, setD5] = useState('2.7 M x 1.7 M');
const [d6, setD6] = useState('2.0 M x 1.15 M');
const [d7, setD7] = useState('4.9 M x 4.0 M');
const [d8, setD8] = useState('3.9 M x 3.9 M');
const [d9, setD9] = useState('2.0 M x 1.1 M');


  const [show, setShow] = useState(1);
  const [showw, setShoww] = useState(true);
  const [imgg, setImgg] = useState(1);
  // const [accord, setAccord] = useState(false);
  const setOver = () => {
    setShow(1)
    setImgg(1)
    setShoww(true)
    setOverview('')
    setTitle('Ground Floor (143.98)M2')
    setOverview2('Rooms')
    setT1('Reception')
 setT2('Living Room');
 setT3('Guest Room');
 setT4('Kitchen');
 setT5('Bathroom');
 setT6('Bathroom 2');
 setT7('Bedroom 1');
 setT8('Bedroom 2');
 setT9('WC');
 setD1('2.8 M x 2.4 M');
 setD2('4.4 M x 3.9 M');
 setD3('5.3 M x 4.9 M');
 setD4('4.2 M x 4.0 M');
 setD5('2.7 M x 1.7 M');
 setD6('2.0 M x 1.15 M');
 setD7('4.9 M x 4.0 M');
 setD8('3.9 M x 3.9 M');
 setD9('2.0 M x 1.1 M');
  }
const setOver2 = () => {
  setTitle("First Floor (59.52) M2")
  setOverview("");
  setShow(1);
  setImgg(2)
  setShoww(true);
  setOverview2('')
  setT1('Bedroom 1')
setT2('Bedroom 2');
setT3('Bathroom');
setT4('');
setT5('');
setT6('');
setT7('');
setT8('');
setT9('');
setD1('3.9 M x 3.7 M');
setD2('4.2 M x 4.0 M');
setD3('4.2 M x 4.0 M');
setD4('');
setD5('');
setD6('');
setD7('');
setD8('');
setD9('');
}


const loadImages = (project: string,lastImage:number) => {
  const path = "../ProjectsBuldingCat/"
  
    const paths = [];
    for (let i = 0; i <= lastImage; i++) {
      paths.push(`${path}/${project}/${i}.webp`);
    }
    return paths;
  
};


  return (
    <div className="project-page flex flex-col h-fit t-10 bg-white" dir={`${isRTL? "rtl":"ltr"}`}>
      <NavBar />

      <div
        className="relative bg-black project-bg flex flex-col regular items-start justify-center h-[125vh] p-10 bg-cover bg-center gap-2 sm:bg-auto">
        <div>
        <p className="md:text-[24px] light text-[8px]">{t("overview")}</p>
        <p className="md:text-[64px] text-[12px]">Gardenia</p>
        </div>
        <p className="md:max-w-[75rem] text-[22px]  light text-md max-w-[40rem]">Villas with a modern pattern, that were especially designed to families who are looking for a comfortable housing, characterized by an elegant design, with parking space for two cars, green yard and large balcony.</p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Number of villas</p> <p className="md:text-[14px] text-[10px]">56</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Floors</p> <p className="md:text-[14px] text-[10px]">Ground floor, First floor & Roof top</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Land Surface</p> <p className="md:text-[14px] text-[10px]">300 m2</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Ground floor</p> <p className="md:text-[14px] text-[10px]">143.98 m2</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">First floor</p> <p className="md:text-[14px] text-[10px]">59.52 m2</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Building area</p> <p className="md:text-[14px] text-[10px]">203.50 m2</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary">
        <Button size="lg" variant="default">Download Brochure</Button>
        <Button size="lg" variant="secondary">Construction update</Button>
        </div>
        </div>
        <div className="absolute flex justify-center uppercase items-center bg-white bottom-0 md:w-1/4 w-1/2 md:h-[10%] h-5 mt-5 rounded-t-[37px] left-1/2 transform -translate-x-1/2">
          <p className="md:text-4xl tex-2xl text-primary regular">Gallery</p>
        </div>

    </div>
      <div className="flex justify-center items-center w-full text-center light md:text-2xl text-md text-[#4D5053]">Highlights</div>
    <div className="flex flex-col h-fit w-full py-5 justify-center items-center text-center">
      <h1 className="text-3xl text-primary-color w-full">
      <ImageSlider imgUrls={loadImages("Gardenia",3)} imgOverText={["Living Room","Entrance","Playground","Streets"]} />
        
      </h1>
      {/* Implement Slider Here */}
    </div>
    <div className="bg-white text-primary-color w-full h-fit flex flex-col justify-start items-center relative">
    <h1 className='regular text-md relative mt-40'>DEMONSTRATION ~ Gardenia</h1>
    <h1 className='regular text-5xl relative'>FLOOR PLANS</h1>
    {/* <img src={modonWhite} alt="MODON" height={150} width={150} /> */}
    <div className="constructs flex w-full bg-white text-primary-color">
      <div className="construct1 flex flex-col justify-center items-center">
        <div className="buruj-btns flex flex-wrap justify-center items-center">
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver}>GROUND FLOOR</Button>
         <Button className='m-2 hover-primary-color upBtn' onClick={setOver2}>FIRST FLOOR</Button>
        </div>
         <div className="flex flex-wrap justify-center gap-5 my-20 animate-fade-down animate-duration-1000 animate-delay-500">
          <div className="flex flex-col gap-5 mb-10 justify-center items-center">
          <h1 className="text-5xl regular">{title}</h1>
          <div className="overview-p text-lg w-3/4 text-center light">{overviewP}</div>
          </div>
         <div className="videos h-fit relative flex justify-center items-center">
            <div className="flex w-3/4 justify-center items-center">
          {imgg===1 ? <img src={GroundFloor} height={1000} width={1000}></img> :<img src={FirstFloor} height={1000} width={1100}></img>}</div>
          {show===1 ? <div className="flex flex-col w-1/2 justify-center items-start light">
          <div className="overview-p2 m-3 regular text-3xl text-white">{overviewP2}</div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t1}</div>
          <div className="overview-d m-3 text-xl">{d1}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t2}</div>
          <div className="overview-d m-3 text-xl">{d2}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t3}</div>
          <div className="overview-d m-3 text-xl">{d3}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t4}</div>
          <div className="overview-d m-3 text-xl">{d4}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t5}</div>
          <div className="overview-d m-3 text-xl">{d5}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t6}</div>
          <div className="overview-d m-3 text-xl">{d6}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t7}</div>
          <div className="overview-d m-3 text-xl">{d7}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t8}</div>
          <div className="overview-d m-3 text-xl">{d8}</div> 
          </div>
          <div className="flex w-3/4 justify-between items-center mx-5">
            <div className="regular text-2xl">{t9}</div>
          <div className="overview-d m-3 text-xl">{d9}</div> 
          </div>
          </div> : ''}
      </div>
          {showw ? <div className="fixed-image h-72 w-full flex justify-around items-center text-white">
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={5} delay={2} duration={3}/></span> <br/> TOTAL PROJECTS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2300} delay={2} duration={3}/></span> <br/> HOUSES BUILT</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={235} delay={2} duration={3}/></span> <br/> QUALIFIED WORKERS</h1>
            <h1 className="text-center light"><span className="regular text-8xl"><CountUp end={2} delay={2} duration={3}/></span> <br/> AWARDS</h1>
          </div> : ''}
         </div>
         </div>
         </div>

         </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="regular flex justify-center items-center text-4xl text-primary-color m-3">Amenities</h1>
      <h1 className="light text-md text-black m-1">GET TO KNOW</h1>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center regular text-xl text-primary-color mt-10">Gardenia</div>
      <div className="p-5 my-5 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={Plane} title="Mosque" description="" />
       <ProjectCard icon={School2} title="Parking" description="1 Minute" />
       <ProjectCard icon={Building} title="Green Yard" description="25 Minutes" />
       <ProjectCard icon={Castle} title="Balcony" description="2 Minutes" />
       <ProjectCard icon={Car} title="Supermarkets" description="20 Minutes" />
       <ProjectCard icon={Car} title="Playgrounds" description="20 Minutes" />
       <ProjectCard icon={Car} title="Schools" description="20 Minutes" />
       <ProjectCard icon={Car} title="Health Centers" description="20 Minutes" />
       <ProjectCard icon={Car} title="Post Office" description="20 Minutes" />
       <ProjectCard icon={Car} title="Police Station" description="20 Minutes" />
      </div>
    </div>
    <div className="right-left-divider my-10 flex justify-center w-full items-center">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
      <Enquire addNow v="default" enqq />
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    </div>
    <Footer />
 </div>
      
  );
};

export default Gardenia;
