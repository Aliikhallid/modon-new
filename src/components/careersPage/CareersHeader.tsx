import FilterComp from "../FilterComp"
import JobCard from "./JobCard"
import { ListBulletIcon, TokensIcon } from "@radix-ui/react-icons"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const CareersHeader = () => {
  return (
    <div className="contact-page w-full h-fit flex flex-col justify-center items-center">
       <div className="career-cont relative h-[90vh] bg-primary-multiply-color w-full flex flex-col justify-center items-center">
    <h1 className="regular text-2xl">Job Portal</h1>
    <h1 className="bold text-5xl m-3">Careers</h1>
    <p className="light text-center">Modon is one of the most prominent and most successful companies in modern<br/> real estate development in Iraq and operates under the umbrella of Al-Handal<br/> International Group.</p>
    <div className="filter-web flex justify-center items-center absolute bottom-0 w-full mb-[-4rem]">
       <FilterComp />
      </div>
       </div>
      <div className="cont-cont h-fit w-full flex bg-white text-primary-color">

      <div className="h-auto w-full flex flex-col  items-center regular p-5">
      <div className=" w-full flex mt-[10%] justify-between p-8">
        <div className="flex gap-2 items-center light">
        <Button variant="ghost" size="icon"> <ListBulletIcon/></Button>
        <Button variant="ghost" size="icon"> <TokensIcon/></Button>

        <div className="flex items-center gap-2">
          <Label className="whitespace-nowrap">Sort By:</Label>
          <Select required>
                    <SelectTrigger className="text-gray-400">
                      <SelectValue placeholder="Default Order" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default" className="job-sort">Default Order</SelectItem>
                      <SelectItem value="recent" >Recent</SelectItem>
                    </SelectContent>
                  </Select>
          
        </div>

        </div>
        <div className="flex gap-5">
        <div>All</div>
        <div>Newest</div>
        <div>Oldest</div>

        </div>
        </div>
        <div className="flex flex-col gap-5">
       <JobCard month={"SEP"} nday={21} day={"WED"} postDate={"1 month ago"} position={"Deputy Contract Manager"} jobDesc={"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian..."} jobLoc={"Baghdad , Iraq"} />
       <JobCard month={"SEP"} nday={21} day={"WED"} postDate={"1 month ago"} position={"Deputy Contract Manager"} jobDesc={"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian..."} jobLoc={"Baghdad , Iraq"} />
       <JobCard month={"SEP"} nday={21} day={"WED"} postDate={"1 month ago"} position={"Deputy Contract Manager"} jobDesc={"Modon Real estate development company located Iraq – Baghdad is currently looking for a Contracts Manager to manage our company contracts. Ensure Contractor’s complian..."} jobLoc={"Baghdad , Iraq"} />

        </div>

      </div>
      </div>
    </div>
  )
}

export default CareersHeader