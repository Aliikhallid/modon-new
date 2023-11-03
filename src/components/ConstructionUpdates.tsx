import { useLayoutEffect } from "react";
import NavBar from "./NavBar"
import ConstructionHeader from "./constructionPage/ConstructionHeader"
import Footer from "./sections/Footer"

const ConstructionUpdates = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <NavBar />
      <ConstructionHeader />
      <Footer />
    </div>
  )
}

export default ConstructionUpdates