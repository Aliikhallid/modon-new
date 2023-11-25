import { useLayoutEffect } from "react"
import NavBar from "./NavBar"
import CareersHeader from "./careersPage/CareersHeader"
import Footer from "./sections/Footer"

const CareersPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
},[]);
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <NavBar />
      <CareersHeader />
      <Footer />
    </div>
  )
}

export default CareersPage