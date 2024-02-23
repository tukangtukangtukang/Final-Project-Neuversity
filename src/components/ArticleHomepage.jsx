import { NavLink } from "react-router-dom";
import { useArticle } from "./ArticleContext";
import FeaturedArticleHomepage from "./FeaturedArticleHomepage";
import PostArticleHomepage from "./PostArticleHomepage";
import { useState, useEffect } from "react";


export default function ArticleHomepage() {
    // // Desctructure posts dari konteks
    const { posts, setPosts, currentPage } = useArticle();

    const getPosts = async () => {
        try {
            const response = await fetch(`https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts?page=${currentPage}&per_page=4&_embed=true`);
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    useEffect(() => {
        getPosts();
    }, [currentPage]);

    return (
        <div className="container justify-center gap-5">

            <NavLink to="/">
                <FeaturedArticleHomepage />
            </NavLink>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-center container px-7">
                {
                    posts !== null
                        ? posts.map((e) => (
                            // card post
                            <PostArticleHomepage key={e.id} data={e} />
                        ))
                        : "Loading..."
                }
            </div>
        </div>
    );
}
