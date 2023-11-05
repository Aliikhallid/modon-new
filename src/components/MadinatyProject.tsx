import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import { Button } from "./ui/button";
import ProjectCard from "./projectPage/projectCard";
import { Castle,Trees,LucideBuilding,Building2,Workflow,ShoppingCart, School2, School, Car, Building, Plane } from "lucide-react";
// import { useLayoutEffect } from "react";
import Enquire from "./sections/Enquire";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import Footer from "./sections/Footer";
import { useLayoutEffect } from "react";

const MadinatyProject = () => {
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
        <p className="md:text-[48px] text-[12px]">{t("madinaty-c")}</p>
        </div>
        <p className="md:max-w-[75rem] light text-md max-w-[40rem]">
          {t("madinaty-description")}
        </p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Kirkuk , Iraq</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">36 Months for Each Phase</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Villas</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Type of Villas</p> <p className="md:text-[14px] text-[10px]">5 Villa Types</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total units</p> <p className="md:text-[14px] text-[10px]">1720 Unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Gross Site Area</p> <p className="md:text-[14px] text-[10px]">791,919 m2</p> </div>


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
       <ProjectCard icon={Building2} title="Approximately 1720" description="Resedential Units" />
       <ProjectCard icon={LucideBuilding} title="2 Floor" description="Homes" />
       <ProjectCard icon={Trees} title="Views" description="Green Spaces" />
       <ProjectCard icon={Workflow} title="Architectural Design" description="Distinctive" />
       <ProjectCard icon={Castle} title="Attractions" description="Playing Areas" />
       <ProjectCard icon={ShoppingCart} title="Shopping" description="Malls & Local Markets" />
       <ProjectCard icon={School} title="Amenities" description="Mosques & Schools" />
       <ProjectCard icon={School2} title="Security" description="Police Station & Fire Station" />
      </div>
    </div>
    <div className="flex flex-wrap gap-10 h-fit w-full py-10 bg-white justify-center items-center relative">
      <div className="w-full flex flex-wrap justify-around items-center text-primary-color">
      <div className="bayti-1 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img1"></div>
        <div className="bayti-title1 regular text-3xl">Cadi</div>
        <div className="bayti-des1 light">Kirkuk, Iraq</div>
        <Button variant="secondary" className="m-2">Explore More</Button>
      </div>
      <div className="bayti-2 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img2"></div>
        <div className="bayti-title2 regular text-3xl">Gardenia</div>
        <div className="bayti-des2 light">Kirkuk, Iraq</div>
        <Button variant="secondary" className="m-2">Explore More</Button>
      </div>
      <div className="bayti-3 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img3"></div>
        <div className="bayti-title3 regular text-3xl">Narjis</div>
        <div className="bayti-des3 light">Kirkuk, Iraq</div>
        <Button variant="secondary" className="m-2">Explore More</Button>
      </div>
      <div className="bayti-4 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img4"></div>
        <div className="bayti-title4 regular text-3xl">Viola</div>
        <div className="bayti-des4 light">Kirkuk, Iraq</div>
        <Button variant="secondary" className="m-2">Explore More</Button>
      </div>
      <div className="bayti-5 flex flex-col justify-center items-center h-full m-3">
        <div className="bayti-img5"></div>
        <div className="bayti-title5 regular text-3xl">Apartments</div>
        <div className="bayti-des5 light">Kirkuk, Iraq</div>
        <Button variant="secondary" className="m-2">Explore More</Button>
      </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h1 className="regular flex justify-center items-center text-4xl text-primary-color m-3">Madinaty Location <SewingPinFilledIcon className="text-primary-color" height={35} width={35} /></h1>
      <h1 className="light text-md text-black m-1">NEAR KIRKUK UNIVERSITY</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d416290.0142668459!2d43.75714887343749!3d35.398663200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1554d92101e41eb9%3A0xec256bb947a4d997!2sMadinaty!5e0!3m2!1sen!2sus!4v1699146281990!5m2!1sen!2sus" width="1000" height="400" className="border-0"></iframe>
    <div className="flex flex-col h-fit w-fit">
      <div className="flex justify-center items-center regular text-xl text-primary-color mt-10">NEAR MADINATY</div>
      <div className="p-5 my-5 h-fit w-fit flex flex-wrap gap-5 justify-center">
       <ProjectCard icon={Plane} title="Kirkuk Airport" description="10 Minutes" />
       <ProjectCard icon={School2} title="Kirkuk University" description="1 Minute" />
       <ProjectCard icon={Building} title="Government Campus" description="25 Minutes" />
       <ProjectCard icon={Castle} title="Kirkuk Castle" description="2 Minutes" />
       <ProjectCard icon={Car} title="City Centre" description="20 Minutes" />
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

export default MadinatyProject;
