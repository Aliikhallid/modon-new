import { Briefcase, CalendarClockIcon, GraduationCap, Hourglass, MapPin } from "lucide-react";
import NavBar from "../NavBar";
import Footer from "../sections/Footer";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const JobApply = () => {
  return (
    <>
      <NavBar />
      <div className="relative h-[200vh] bg-primary-multiply-color w-full flex flex-col justify-center items-start text-white regular gap-5">
        <div className="w-full flex justify-start p-6">
        <p className="text-5xl">Deputy Contract Manager</p>
        </div>
        <div className="flex w-1/4 justify-between items-start p-6">
           <p> <MapPin />Baghdad, Iraq</p>
           <p> <CalendarClockIcon />Posted 2 years ago</p>
        </div>
        <div className="flex flex-col justify-start items-start gap-5 p-6">
            <div className="flex flex-col justify-end gap-3 light">
            <p className="text-3xl">Overview / Responsibilities:</p>
            <p className="text-xl">Modon Real estate development company located Iraq - Baghdad is currently looking for a Contracts Manager to manage our company contracts.</p>
            <ul className="text-xl light flex flex-col gap-2 list-disc p-6">
                <li>Ensure Contractor's compliance with contractual requirements, e.g., Performance Security Bond, Letter of Credit, Insurance Policies, etc.</li>
                <li>Coordinate the change control process, including: amendments, change orders and other contract changes</li>
                <li>Support the resolution of Contractor change notices and claims</li>
                <li>Coordinate the issue of any suspension, cancellation, and / or termination notices in line with contract terms</li>
            </ul>
            </div>
            <div className="flex flex-col justify-end gap-3 light">
            <p className="text-3xl">Skills / Qualifications:</p>
            <ul className="text-xl light flex flex-col gap-2">
                <li>Experience in a contracts administration role in real estate development industry.</li>
                <li>Good understanding & extensive experience of procurement and contract administration processes and principles</li>
                <li>Strong grasp of procedural requirements & necessity of providing an Audit Trail for Management purposes</li>
                <li>Ability to efficiently work with other groups to resolve issues</li>
            </ul>
            </div>
        </div>
        <div className="flex flex-col p-6 gap-10 w-full">
        <p className="text-4xl">JOB FEATURES</p>
        <div className="flex light justify-between w-1/2">
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><Briefcase/> Job Type</div>
           <div className="flex justify-center w-full text-xl">Full Time</div>
           </div>
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><GraduationCap/>Education</div>
           <div className="flex justify-center w-full text-xl">Bachelor's (required)</div>
           </div>
           <div className="flex light">
           <div className="flex flex-col text-2xl"> 
           <div className="flex gap-4 items-center"><Hourglass/>Experience</div>
           <div className="flex justify-center w-full text-xl">10 years (required)</div>
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
