import { BookmarkIcon } from "@radix-ui/react-icons"
import NavBar from "./NavBar"

const CareersPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <NavBar />
      <div className="career-cont h-full w-full flex flex-col justify-center items-center">
      <h1 className="regular m-3 text-6xl">Apply for Jobs</h1>
      <p className="light m-3">JOIN OUR TEAM OF PIONEERS IN THE REAL ESTATE DEVELOPMENT
         INDUSTRY</p>
      <div className="team flex m-3">
        <div className="team-member">
          <div className="team-icon p-5 border rounded-full w-max flex">
          <BookmarkIcon height={25} width={25}/>
          <h1 className="light">Team Spirited</h1>
          </div>
        </div>
          <div className="team-icon p-5 border rounded-full w-max flex">
          <BookmarkIcon height={25} width={25}/>
          <h1 className="light">Dynamic</h1>
          </div>
        <div className="team-member">
        </div>
        <div className="team-member">
          <div className="team-icon p-5 border rounded-full w-max flex">
          <BookmarkIcon height={25} width={25}/>
          <h1 className="light">Innovative</h1>
          </div>
        </div>
        <div className="team-member">
          <div className="team-icon p-5 border rounded-full w-max flex">
          <BookmarkIcon height={25} width={25}/>
          <h1 className="light">Passionate</h1>
          </div>
        </div>
        <div className="team-member">
          <div className="team-icon p-5 border rounded-full w-max flex">
          <BookmarkIcon height={25} width={25}/>
          <h1 className="light">Engaged</h1>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CareersPage