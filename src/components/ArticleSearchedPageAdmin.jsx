import CreatePost from "./CreatePost"
import PostArticleSearchedPageAdmin from "./PostArticleSearchedPageAdmin"

export default function ArticleSearchedPageAdmin() {
    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 my-7 container gap-5">
            <PostArticleSearchedPageAdmin />
            <PostArticleSearchedPageAdmin />
            <PostArticleSearchedPageAdmin />

            <PostArticleSearchedPageAdmin />
            <PostArticleSearchedPageAdmin />
            <PostArticleSearchedPageAdmin />

            <PostArticleSearchedPageAdmin />
            <PostArticleSearchedPageAdmin />
            <CreatePost />

        </div>

    )
}
