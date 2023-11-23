import { Briefcase, CalendarClockIcon, GraduationCap, Hourglass, MapPin } from "lucide-react";
import NavBar from "../NavBar";
import Footer from "../sections/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useLayoutEffect } from "react";
import { timeAgo } from "./funcs";

interface PositionInfo  {
  positionName: string;
  location:string;
  postDate:Date;
  description: string;
  Responsibilities:string[],
  skills:string[],
  requirements:{type:string,education:string,experience:string}


}
interface JobApplyProps{
  jobDesc: PositionInfo
}

const JobApply = ({jobDesc}:JobApplyProps) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <>
      <NavBar />
      <div className="relative h-fit py-40 bg-primary-multiply-color w-full flex flex-col justify-center items-start text-white regular gap-5">
        <div className="w-full flex justify-start p-6">
        <p className="text-5xl">{jobDesc.positionName}</p>
        </div>
        <div className="flex w-1/4 justify-between items-start p-6">
           <p> <MapPin />{jobDesc.location}</p>
           <p> <CalendarClockIcon />{timeAgo(jobDesc.postDate)}</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 p-6">
            <div className="flex flex-col justify-end gap-3 light">
            <p className="text-3xl">Overview / Responsibilities:</p>
            <p className="text-xl">{jobDesc.description}</p>
            <ul className="text-xl light flex flex-col gap-2 list-disc p-6">
                {jobDesc.Responsibilities.map((r,index) => (<li key={index}>{r}</li>))}
            </ul>
            </div>
            <div className="flex flex-col justify-end gap-3 light">
            <p className="text-3xl">Skills / Qualifications:</p>
            <ul className="text-xl light flex flex-col gap-2">
            {jobDesc.skills.map((r,index) => (<li key={index}>{r}</li>))}
            </ul>
            </div>
        </div>
        <div className="flex flex-col p-6 gap-10 w-full">
        <p className="text-4xl">JOB FEATURES</p>
        <div className="flex light justify-between w-1/2">
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><Briefcase/> Job Type</div>
           <div className="flex justify-center w-full text-xl">{jobDesc.requirements.type}</div>
           </div>
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><GraduationCap/>Education</div>
           <div className="flex justify-center w-full text-xl">{jobDesc.requirements.education}</div>
           </div>
           <div className="flex light">
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><Hourglass/>Experience</div>
           <div className="flex justify-center w-full text-xl">{jobDesc.requirements.experience}</div>
           </div>
        </div>
        </div>
        <div className="w-full flex flex-col gap-4 items-center">
        <p className="text-4xl">APPLY NOW</p>
        <form className="flex flex-col gap-4 items-center">
            <div className="flex w-full gap-5 items-center">
            <Label className="text-xl">Name:</Label>
            <Input />
            </div>

            <div className="flex w-full gap-5 items-center">
            <Label className="text-xl">Email:</Label>
            <Input required />
            </div>
            <div className="flex w-full  gap-5  items-center">
            <Label className="text-xl">Phone:</Label>
            <Input required/>
            </div>
            <div className="flex w-full  gap-5  items-center">
            <Label className="text-xl whitespace-nowrap">Attach Resume:</Label>
            <Input type="file" required />
            </div>
            <Button>Submit</Button>
        </form>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobApply;
