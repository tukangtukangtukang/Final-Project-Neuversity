import { NavLink } from "react-router-dom"

export default function PostFeaturedArticleHomepage({ data }) {
    return (
        <div className="">
            <NavLink to={"/singlepage/" + data.id}>
                <h1 className="absolute text-5xl font-bold mt-28 ms-28 sm:ms-20">{data.title.rendered}</h1>
                <div className="absolute pt-5 px-2 mt-36 ms-28 text-balance text-sm sm:ms-20" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></div>
                <img className='mx-auto rounded-badge w-11/12 h-56 object-cover object-center' src="https://picsum.photos/seed/picsum/1218/451" alt="Image 1" />
            </NavLink>
        </div>
    )
}
