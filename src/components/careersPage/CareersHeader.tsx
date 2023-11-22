import JobCard from "./JobCard"
import { ListBulletIcon, TokensIcon } from "@radix-ui/react-icons"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import {Jobs} from "./jobData"
import { useState } from "react"
import FilterJobs from "./FilterJobs"


interface JobCardProps{
  month:string;
  nday:number;
  day:string;
  postDate: Date;
  position: string;
  jobDesc: string;
  jobLoc: string;

}
const CareersHeader = () => {
  const [jobList, setJobList] = useState<JobCardProps[]>(Jobs);
  const [sortingOption, setSortingOption] = useState("newest"); 

  const handleSortChange = (value: string) => {
    setSortingOption(value);
    updateJobList(value);
  };

  const updateJobList = (option: string) => {
    const sortedJobs = option === "newest" ? sortByDateDesc(jobList) : sortByDate(jobList);
    setJobList(sortedJobs);
  };

  const sortByDate = (jobs: JobCardProps[]) => {
    return jobs.sort((a, b) => new Date(a.postDate).getTime() - new Date(b.postDate).getTime());
  };

  const sortByDateDesc = (jobs: JobCardProps[]) => {
    return jobs.sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime());
  };
  return (
    <div className="contact-page w-full h-fit flex flex-col justify-center items-center">
       <div className="career-cont relative h-[90vh] bg-primary-multiply-color w-full flex flex-col justify-center items-center">
    <h1 className="regular text-2xl">Job Portal</h1>
    <h1 className="bold text-5xl m-3">Careers</h1>
    <p className="light text-center">Modon is one of the most prominent and most successful companies in modern<br/> real estate development in Iraq and operates under the umbrella of Al-Handal<br/> International Group.</p>
    <div className="filter-web flex justify-center items-center absolute bottom-0 w-full mb-[-4rem]">
    <FilterJobs setJobList={setJobList} sortingOption={sortingOption}/>
      </div>
       </div>
      <div className="cont-cont h-fit w-full flex bg-white text-primary-color">

      <div className="h-auto w-full flex flex-col  items-center regular p-5">
      <div className=" w-full flex mt-[10%] justify-between p-8">
        <div className="flex gap-2 items-center light">
        <ListBulletIcon/>
        <TokensIcon/>

        <div className="flex items-center gap-2">
          <Label className="whitespace-nowrap">Sort By:</Label>
          <Select onValueChange={handleSortChange} value={sortingOption} required>
                    <SelectTrigger className="text-gray-400">
                      <SelectValue placeholder="Newest to Oldest" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="newest" className="job-sort">Newest to Oldest</SelectItem>
                      <SelectItem value="oldest" >Oldest to Newest</SelectItem>
                    </SelectContent>
                  </Select>
          
        </div>
        </div>
        </div>
        <div className="flex flex-col gap-5">
        {jobList.map((job,index) =>(<JobCard key={index} month={job.month} nday={job.nday} day={job.day} postDate={job.postDate} position={job.position} jobDesc={job.jobDesc} jobLoc={job.jobLoc}/>))}

        </div>

      </div>
      </div>
    </div>
  )
}

export default CareersHeader