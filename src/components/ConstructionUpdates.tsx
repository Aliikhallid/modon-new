import { useLayoutEffect } from "react";
import NavBar from "./NavBar"
import ConstructionHeader from "./constructionPage/ConstructionHeader"
import Footer from './Footer/Footer'
import ConstructionTitle from "./constructionPage/ConstructionTitle";

const ConstructionUpdates = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div>
      <NavBar />
      <ConstructionTitle />
      <ConstructionHeader />
      <Footer />
    </div>
  )
}

export default ConstructionUpdates