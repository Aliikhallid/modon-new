import NavBar from "./NavBar"
import CareersHeader from "./careersPage/CareersHeader"
import CareersMain from "./careersPage/CareersMain"
import Footer from "./sections/Footer"

const CareersPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <NavBar />
      <CareersHeader />
      <CareersMain />
      <Footer />
    </div>
  )
}

export default CareersPage