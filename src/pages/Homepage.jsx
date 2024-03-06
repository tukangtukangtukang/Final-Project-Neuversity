import Client from "../layout/Client";
import ArticleHomepage from "../components/ArticleHomepage";
import Pagination from "../components/Pagination";

function Homepage() {
  return (
    <Client>
      <ArticleHomepage />
      <Pagination />
    </Client>
  )
}

export default Homepage;