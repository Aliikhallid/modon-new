import { useLayoutEffect } from "react";
import NavBar from "./NavBar"
import NewsHeader from "./newsPage/NewsHeader"
import NewsMain from "./newsPage/NewsMain"

const NewsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <div className="w-full">
      <NavBar />
      <NewsHeader />
      <NewsMain />
    </div>
  )
}
export default NewsPage