import { useArticle } from "./ArticleContext"
import CardArticleSearchedPage from "./CardArticleSearchedPage"
import Pagination from "./Pagination"

export default function ArticleSearchedPage() {

    const { posts } = useArticle();

    return (

        <div className="container">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 my-7 gap-5">
                {posts !== null ? posts.slice(0, 9).map((e) => (
                    < CardArticleSearchedPage key={e.id} data={e} />
                )) : "Loading..."
                }
            </div>
            <Pagination />
        </div>
    )
}