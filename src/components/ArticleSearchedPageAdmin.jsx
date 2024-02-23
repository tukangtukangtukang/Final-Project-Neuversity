import CreatePost from "./CreatePost"
import PostArticleSearchedPageAdmin from "./PostArticleSearchedPageAdmin"
import { useEffect, useState } from "react"
import { getPosts } from "../utils/fetchData"
import { useArticle } from "./ArticleContext"

export default function ArticleSearchedPageAdmin() {

    const { posts, setPosts } = useArticle();

    async function fetchData() {
        const data = await getPosts();
        setPosts(data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 my-7 container gap-5">
            <CreatePost />
            {
                posts !== null
                    ? posts.map((e) => {
                        return <PostArticleSearchedPageAdmin key={e.id} data={e} />
                    })
                    : "kosong"
            }

        </div>

    )
}
