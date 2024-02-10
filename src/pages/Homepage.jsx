import ArticleHomepage from "../components/ArticleHomepage";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <ArticleHomepage />
      <Pagination />
    </div>
  )
}


export default Homepage;