import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { timeAgo } from "./funcs";

interface JobCardProps{
    month:string;
    nday:number;
    day:string;
    postDate: Date;
    position: string;
    jobDesc: string;
    jobLoc: string;

}

  
  
const JobCard = ({month,nday,day,postDate,position,jobDesc,jobLoc}: JobCardProps) => {
    
    return(
        <div className="bg-white w-[78vw] h-[290px] border-primary border shadow-md rounded flex items-center">
            <div className="flex flex-col items-end w-[10%] p-5 gap-9 justify-evenly text-xl regular">
                <p>{month}</p>
                <p>{nday}</p>
                <p>{day}</p>
                <p className="text-sm light text-gray-400">{timeAgo(postDate)}</p>
            </div>
            <div className="w-2 h-4/5 bg-[#FA9D1C]"></div>
            <div className="flex flex-col items-start w-full p-5 justify-evenly regular gap-3">
                <p className="text-2xl">{position}</p>
                <div className="flex items-start gap-2">
                <p className="text-black whitespace-nowrap">Job Overview:</p>
                <p className="text-black ">{jobDesc}</p>
                </div>
                <div className="flex gap-2">
                    <MapPin/>
                    <p>{jobLoc}</p>
                </div>
                <div className="flex justify-end w-full">
                        <Link to={position.toLocaleLowerCase().replace(/ /g, "-")}><Button variant="default" size="lg">Apply Now</Button></Link>
                    </div>
            </div>

        </div>
    )
}

export default JobCard;