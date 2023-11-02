import { useState } from "react"
import { Button } from "../ui/button"

const CareersMain = () => {
  const [searchValue, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div className="career-main w-full h-screen flex flex-col justify-center items-center rounded bg-black relative">
      <div className="search-sec w-full h-40 flex justify-center items-center absolute top-0">
       <div className="search-inputs h-32 w-11/12 flex flex-col justify-center items-center">
        <input type="text" value={searchValue} placeholder="Search.." onChange={handleChange} className="h-10 w-11/12 rounded" />
        <div className="sc-input flex w-11/12 gap-3 m-3">
          <select name="jobs" className="h-10 w-40 rounded" placeholder="Location">
            <option value="job1">Location 1</option>
            <option value="job2">Location 2</option>
            <option value="job3">Location 3</option>
          </select>
          <Button className="bg-primary-color w-11/12 rounded h-10 hover:text-black">Search</Button>
        </div>
       </div>
      </div>
      <div className="jobs-sec flex flex-col gap-3 justify-center items-center w-full text-black">
        <div className="job w-full flex justify-center items-center">
          <div className="job-txt w-1/2">
          <div className="job-title regular text-3xl">Architect Engineer</div>
          <div className="job-des w-1/2 light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, hic vero in labore excepturi, perferendis pariatur odit ullam vitae quos odio suscipit? Iure, maxime libero?</div>
          </div>
          <div className="job-apply">
            <Button className="bg-primary-color text-white hover:text-black">Apply Now</Button>
          </div>
        </div>
        <div className="job w-full flex justify-center items-center">
          <div className="job-txt w-1/2">
          <div className="job-title regular text-3xl">Deputy Contract Manager</div>
          <div className="job-des w-1/2 light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, hic vero in labore excepturi, perferendis pariatur odit ullam vitae quos odio suscipit? Iure, maxime libero?</div>
          </div>
          <div className="job-apply">
            <Button className="bg-primary-color text-white hover:text-black">Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersMain