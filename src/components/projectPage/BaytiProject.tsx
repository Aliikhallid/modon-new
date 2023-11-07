import { useTranslation } from "react-i18next";
import NavBar from "../NavBar";
import { Button } from "../ui/button";
import ProjectCard from "./projectCard";
import { Castle,Trees,LucideBuilding,Building2,Workflow,ShoppingCart, School2, School, CarFront, Car, Building, TrainFront, Store, } from "lucide-react";
import { Link } from "react-router-dom";
// import { useLayoutEffect } from "react";
import Enquire from "../sections/Enquire";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import Footer from "../sections/Footer";
import { useLayoutEffect } from "react";

const BaytiProject = () => {
  const {t,i18n} = useTranslation();
  const isRTL = i18n.language === "ar"
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  return (
    <div className="project-page flex flex-col h-fit t-10 bg-white" dir={`${isRTL? "rtl":"ltr"}`}>
      <NavBar />

      <div
        className="relative bg-black project-bg flex flex-col regular items-start justify-center h-[125vh] p-10 bg-cover bg-center gap-2 sm:bg-auto">
        <div>
        <p className="md:text-[14px] light text-[8px]">{t("overview")}</p>
        <p className="md:text-[48px] text-[12px]">{t("bayti-c")}</p>
        </div>
        <p className="md:max-w-[75rem] light text-md max-w-[40rem]">
          {t("bayti-description")}
        </p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Tikrit , Iraq</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">36 Months for Each Phase</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Villas</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Type of Villas</p> <p className="md:text-[14px] text-[10px]">4 Villa Types</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total units</p> <p className="md:text-[14px] text-[10px]">1398 Unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Gross Site Area</p> <p className="md:text-[14px] text-[10px]">791,900 m2</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary">
        <Enquire addNow v="default" enqq />
        <Button size="lg" variant="secondary">Construction update</Button>
        </div>
        </div>
        <div className="absolute flex justify-center uppercase items-center bg-white bottom-0 md:w-1/4 w-1/2 md:h-[10%] h-5 mt-5 rounded-t-[37px] left-1/2 transform -translate-x-1/2">
          <p className="md:text-4xl tex-2xl text-primary regular">Features</p>
        </div>

    </div>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center light md:text-2xl text-md text-[#4D5053]">Highlights</div>
      <div className="p-5 my-10 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={Building2} title="Approximately 1381" description="Resedential Units" />
       <ProjectCard icon={LucideBuilding} title="2 Floor" description="Villas" />
       <ProjectCard icon={Trees} title="Views" description="Green Spaces" />
       <ProjectCard icon={Workflow} title="Architectural Design" description="Distinctive" />
       <ProjectCard icon={Castle} title="2 Entrances" description="To Compound" />
       <ProjectCard icon={ShoppingCart} title="Shopping" description="Malls & Local Markets" />
       <ProjectCard icon={School} title="Prayer" description="Mosques & Prayer Rooms" />
       <ProjectCard icon={School2} title="Schools" description="Nursery to High Schools" />
      </div>
    </div>
    <div className="flex flex-wrap gap-5 h-fit w-full py-10 bg-white text-primary-color justify-center items-center relative">
      <div className="bayti-1 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img1"></div>
        <div className="bayti-title1 regular text-3xl">Jory</div>
        <div className="bayti-des1 light">Tikrit, Iraq</div>
        <Link to="#/jory"><Button variant="secondary" className="m-2 flex justify-center items-center gap-2">Explore More</Button></Link>
      </div>
      <div className="bayti-2 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img2"></div>
        <div className="bayti-title2 regular text-3xl">Lotus</div>
        <div className="bayti-des2 light">Tikrit, Iraq</div>
        <Link to="#/lotus"><Button variant="secondary" className="m-2">Explore More</Button> </Link>
      </div>
      <div className="bayti-3 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img3"></div>
        <div className="bayti-title3 regular text-3xl">Narjis</div>
        <div className="bayti-des3 light">Tikrit, Iraq</div>
        <Link to="#/narjis"><Button variant="secondary" className="m-2">Explore More</Button></Link>
      </div>
      <div className="bayti-4 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img4"></div>
        <div className="bayti-title4 regular text-3xl">Viola</div>
        <div className="bayti-des4 light">Tikrit, Iraq</div>
        <Link to="#/viola"><Button variant="secondary" className="m-2">Explore More</Button></Link>
      </div>
      <div className="bayti-5 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img5"></div>
        <div className="bayti-title5 regular text-3xl">Yasmin</div>
        <div className="bayti-des5 light">Tikrit, Iraq</div>
        <Link to="#/yasmin"><Button variant="secondary" className="m-2">Explore More</Button></Link>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="regular flex justify-center items-center text-4xl text-primary-color m-3">Bayti Location <SewingPinFilledIcon className="text-primary-color" height={35} width={35} /></h1>
      <h1 className="light text-md text-black m-1">NEAR BAGHDAD INTERNATIONAL AIRPORT</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d420185.11757992225!2d43.0773573734375!3d34.637116000000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15515183c394860b%3A0x7f2997ff05f27d20!2z2YXYtNix2YjYuSDYqNmK2KrZiiDYp9mE2LPZg9mG2YogQmF5dGkgUHJvamVjdA!5e0!3m2!1sen!2sus!4v1699145366850!5m2!1sen!2sus" width="1000" height="400" className="border-0"></iframe>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center regular text-xl text-primary-color mt-10">NEAR BURUJ</div>
      <div className="p-5 my-5 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={School} title="Tikrit University" description="4 KM" />
       <ProjectCard icon={Store} title="City Centre" description="5 KM" />
       <ProjectCard icon={TrainFront} title="Train Station" description="4 KM" />
       <ProjectCard icon={Building} title="Degla Hospital" description="4 KM" />
       <ProjectCard icon={Car} title="Kadesiah Main Road" description="160 M" />
       <ProjectCard icon={CarFront} title="Baghdad Highway" description="4 KM" />
      </div>
    </div>
    <div className="right-left-divider my-10 flex justify-center w-full items-center">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
      <Enquire addNow v="default" enqq />
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    <div className="right-left-divider flex justify-center w-full items-center">
      <div className="left-divider h-0.5 w-1/3 bg-primary-color"></div>
     <Link to="#/image-gallery"><Button size="lg" className="regular">Image Gallery</Button></Link>
      <div className="right-divider h-0.5 w-1/3 bg-primary-color"></div>
    </div>
    </div>
    <Footer />
 </div>
      
      
  );
};

export default BaytiProject;
