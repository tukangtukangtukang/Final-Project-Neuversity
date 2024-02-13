import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import FeaturedArticleHomepage from "./FeaturedArticleHomepage";
import PostArticleHomepage from "./PostArticleHomepage";
import { Splide, SplideSlide } from '@splidejs/react-splide';


export default function ArticleHomepage() {

    const [posts, setPosts] = useState(null)

    async function getPosts() {
        const endpoint = 'https://api-fe-batch5.neuversity.id/api/posts';
        const res = await fetch(endpoint);
        const data = await res.json();
        setPosts(data);
    }
    //getProducts();

    //mounting
    useEffect(() => {
        console.log("mounting")
        getPosts();
    }, [])

    return (
        <div className="container justify-center gap-5">
            <NavLink to="/" >
                <FeaturedArticleHomepage />
            </NavLink>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 justify-center container px-7">
                {
                    posts !== null
                        ? posts.data.slice(0, 4).map((e) => { // ngambil 4 post sadja
                            return <PostArticleHomepage key={e.id} data={e} />
                        })
                        : "kosong"
                }
            </div>
        </div>

    )

    return (
        <div className="container justify-center gap-5">
            <NavLink to="/" >
                <FeaturedArticleHomepage />
            </NavLink>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-center container px-7'>
                <NavLink to="/singlepage" >
                    <PostArticleHomepage />
                </NavLink>
                <NavLink to="/" >
                    <PostArticleHomepage />
                </NavLink>
                <NavLink to="/" >
                    <PostArticleHomepage />
                </NavLink>
                <NavLink to="/" >
                    <PostArticleHomepage />
                </NavLink>
            </div>
        </div>
    )
}
