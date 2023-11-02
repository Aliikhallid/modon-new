import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import ProjectBG from "../assets/ProjectBG.png";
import { Button } from "./ui/button";
import ProjectCard from "./projectPage/projectCard";

const ProjectPage = () => {
  const {t,i18n} = useTranslation();
  const isRTL = i18n.language === "ar"

  return (
    <div className="project-page flex flex-col min-h-screen t-10 bg-white" dir={`${isRTL? "rtl":"ltr"}`}>
      <NavBar />

      <div
        className="relative flex flex-col regular items-start justify-center h-[120vh] p-10 bg-cover bg-center gap-2 sm:bg-auto"
        style={{ backgroundImage: `url(${ProjectBG})` }}
      >
        <div>
        <p className="md:text-[14px] light text-[8px]">{t("overview")}</p>
        <p className="md:text-[48px] text-[12px]">{t("boroj")}</p>
        </div>
        <p className="md:text-[22px] md:max-w-[75rem] light text-[14px] max-w-[40rem]">
          {t("project-placeholder")}
        </p>
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px] mt-10  uppercase flex justify-center items-center">{t("info")}</div>
        <div className={`h-[268px] light text-black bg-opacity-60 bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] ${isRTL? "rounded-tl-[20px]":"rounded-tr-[20px]"} grid grid-cols-3 grid-rows-2`}>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Baghdad , Iraq</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">Handover in 2023 (Phase 1)</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Residential & Commercial Apartment</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total towers</p> <p className="md:text-[14px] text-[10px]">31 tower</p> </div>
  <div className={`p-4 relative ${isRTL? "border-l":"border-r"} border-white flex flex-col gap-1 justify-center`}><p className="md:text-[16px] text-[14px] text-primary">Total units</p> <p className="md:text-[14px] text-[10px]">3800 unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Gross site area</p> <p className="md:text-[14px] text-[10px]">290,727 m2</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary">
        <Button size="lg" >Inquire Now</Button>
        <Button size="lg">Construction update</Button>
        </div>
        </div>
        <div className="absolute flex justify-center uppercase items-center bg-white bottom-0 md:w-1/4 w-1/2 md:h-[10%] h-5 mt-5 rounded-t-[37px] left-1/2 transform -translate-x-1/2">
          <p className="md:text-4xl tex-2xl text-primary regular">Features</p>
        </div>

    </div>
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center light md:text-2xl text-md text-[#4D5053]">Highlights</div>
      <div className="p-5 flex flex-wrap gap-5 justify-center">
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      <ProjectCard title="Invest Alongside The Experts" description="We bring our members high quality commercial investment opportunities that are normally hidden away in country clubs or investment firms. Investors through Equity Street Capital get access to a diverse range of retail" />
      </div>
      </div>

      </div>
      
      
  );
};

export default ProjectPage;
