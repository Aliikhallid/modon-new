import NavBar from "./NavBar"
import NewsHeader from "./newsPage/NewsHeader"
import NewsMain from "./newsPage/NewsMain"

const NewsPage = () => {

  return (
    <div className="w-full">
      <NavBar />
      <NewsHeader />
      <NewsMain />
    </div>
  )
}
export default NewsPage