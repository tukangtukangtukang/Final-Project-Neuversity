import CardArticleSearchedPage from "./CardArticleSearchedPage"
import Pagination from "./Pagination"

export default function ArticleSearchedPage() {
    return (
        <div className="container">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 my-7 gap-5">
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
                < CardArticleSearchedPage />
            </div>
            <Pagination />
        </div>
    )
}