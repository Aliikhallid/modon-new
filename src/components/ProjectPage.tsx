import { useTranslation } from "react-i18next";
import NavBar from "./NavBar";
import ProjectBG from "../assets/ProjectBG.png";
import { Button } from "./ui/button";

interface ProjectProps {
  projectName: string;
}

const ProjectPage = ({ projectName }: ProjectProps) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <div
        className="relative flex flex-col items-start justify-center  md:h-screen p-10 bg-cover bg-center font-Optima gap-5 h-auto sm:bg-auto"
        style={{ backgroundImage: `url(${ProjectBG})` }}
      >
        <p className="md:text-[16px] text-[8px]">Overview</p>
        <p className="md:text-[32px] text-[16px]">{t(projectName)} Boroj</p>
        <p className="md:text-[24px] md:max-w-[75rem] text-[12px] max-w-[40rem]">
          Buruj signifies the start of a new era – An era where you can experience a vibrant and rich lifestyle in a safe environment and feel the luxury of living and belonging. Located in the heart of Baghdad City and inspiring lifestyle and comfort in every detail.
        </p>
        <div className="flex w-full flex-col gap-5 items-center justify-between md:flex-row">
          <div>
        <div className="w-1/4 h-[55px] bg-white rounded-t-[15px] text-primary text-[20px]  uppercase flex justify-center items-center">Info</div>
        <div className="h-[268px] text-black bg-opacity-60 mt-[-0.5rem] bg-white backdrop-blur-2xl shadow-lg rounded-b-[20px] rounded-tr-[20px] grid grid-cols-3 grid-rows-2">
  <div className="p-4 relative border-r border-white flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Location</p> <p className="md:text-[14px] text-[10px]">Baghdad , Iraq</p> </div>
  <div className="p-4 relative border-r border-white flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Status</p> <p className="md:text-[14px] text-[10px]">Handover in 2023 (Phase 1)</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Category</p> <p className="md:text-[14px] text-[10px]">Residential & Commercial Apartment</p> </div>
  <div className="p-4 relative border-r border-white flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Total towers</p> <p className="md:text-[14px] text-[10px]">31 tower</p> </div>
  <div className="p-4 relative border-r border-white flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Total units</p> <p className="md:text-[14px] text-[10px]">3800 unit</p> </div>
  <div className="p-4 relative  flex flex-col gap-1 justify-center"><p className="md:text-[16px] text-[14px] text-primary">Gross site area</p> <p className="md:text-[14px] text-[10px]">290,727 m2</p> </div>


</div>
        </div> 
        <div className="flex flex-col gap-7 text-[24px] text-primary">
        <Button size="lg" >Inquire Now</Button>
        <Button size="lg">Construction update</Button>
        </div>
        </div>
    </div>
      </div>

      
  );
};

export default ProjectPage;
