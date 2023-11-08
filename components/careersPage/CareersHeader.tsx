import { BookmarkIcon } from "@radix-ui/react-icons"

const CareersHeader = () => {
  return (
    <div className="w-full relative">
      <div className="career-cont h-screen w-full flex flex-col justify-center items-center">
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
      {/* <h1 className="regular absolute bottom-10 text-xl flex w-full justify-center items-center">We All Have Parts to Play - Available Jobs <DoubleArrowDownIcon height={20} width={20} className="mx-3" />2</h1> */}
    </div>
  )
}

export default CareersHeader