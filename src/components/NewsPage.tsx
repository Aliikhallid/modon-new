import { useLayoutEffect } from "react";
import NavBar from "./NavBar"
import { NewsHeader } from "./newsPage/NewsHeader.1";
import NewsMain from "./newsPage/NewsMain"
import Footer from "./sections/Footer";

const NewsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="w-full">
      <NavBar />
      <NewsHeader />
      <NewsMain />
      <Footer />
    </div>
  )
}
export default NewsPage