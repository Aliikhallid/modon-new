import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { Button } from "../ui/button";
import { positions, jobLocations,Jobs } from "./jobData";

interface JobCardProps{
    month:string;
    nday:number;
    day:string;
    postDate: Date;
    position: string;
    jobDesc: string;
    jobLoc: string;
  
  }

type Checked = DropdownMenuCheckboxItemProps["checked"];
interface FilterJobsProps {
    setJobList: React.Dispatch<React.SetStateAction<JobCardProps[]>>;
    sortingOption:string
  }
export default function FilterJobs({setJobList,sortingOption}: FilterJobsProps) {
  const { t } = useTranslation();

  const [checkedPositions, setCheckedPositions] = useState<Record<string, Checked>>(
    positions.reduce((acc, position) => ({ ...acc, [position]: true }), {})
  );
  const [checkedLocations, setCheckedLocations] =  useState<Record<string, Checked>>(
    jobLocations.reduce((acc, location) => ({ ...acc, [location]: true }), {})
  );

  const handlePositionChange = (position: string, checked: Checked) => {
    setCheckedPositions((prev) => ({ ...prev, [position]: checked }));
  };

  const handleLocationChange = (location: string, checked: Checked) => {
    setCheckedLocations((prev) => ({ ...prev, [location]: checked }));
  };
  const sortByDate = (jobs: JobCardProps[]) => {
    return jobs.sort((a, b) => new Date(a.postDate).getTime() - new Date(b.postDate).getTime());
  };

  const sortByDateDesc = (jobs: JobCardProps[]) => {
    return jobs.sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime());
  };

  
  function handleOnClick() {
    let filteredJobs = Jobs.filter((job) => {
      const isSelectedPosition = Object.keys(checkedPositions).some(
        (position) => checkedPositions[position] && position === job.position
      );
  
      const isSelectedLocation = Object.keys(checkedLocations).some(
        (location) => checkedLocations[location] && location === job.jobLoc
      );
  
      return isSelectedPosition && isSelectedLocation;
    });
  
    filteredJobs = sortingOption === 'newest' ? sortByDateDesc(filteredJobs) : sortByDate(filteredJobs);
  
    setJobList(filteredJobs);
  }
  

  return (
    <div className="props-filterjob-container bg-white text-primary-color light w-11/12 h-24 rounded-[5px] relative mt-5 border shadow-xl flex justify-center items-center">
      <div className="props-filter-one flex border-r border-primary-multiply-color border-solid m-4 text-left w-1/5 relative">
        <section className="mr-10 w-full flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full regular text-md rounded"
              >
                Job Position
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuLabel>Positions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {positions.map((p) => (
                <DropdownMenuCheckboxItem
                checked={checkedPositions[p]}
                onCheckedChange={(checked) => handlePositionChange(p, checked)}
                >
                  {p}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
      <div className="flex border-r border-primary-multiply-color border-solid m-4 text-left w-1/5 relative">
        <section className="mr-10 w-full">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="w-full regular text-md rounded"
              >
                Location
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white">
              <DropdownMenuLabel>Locations</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {jobLocations.map((p) => (
                <DropdownMenuCheckboxItem
                checked={checkedLocations[p]}
                onCheckedChange={(checked) => handleLocationChange(p, checked)}
                >
                  {p}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
      <div className="props-filter-button m-4 text-center w-1/5">
        <Button onClick={handleOnClick} className="bg-primary-color text-white hover:text-black rounded w-max">
          {t("search_properties")}
        </Button>
      </div>
    </div>
  );
}
