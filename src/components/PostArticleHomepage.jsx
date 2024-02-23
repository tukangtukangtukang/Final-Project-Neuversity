import { NavLink } from "react-router-dom"
export default function PostArticleHomepage({ data }) {
    return (
        <NavLink to={"/singlepage/" + data.id} >
            <div className='w-60 mx-auto p-1'>
                <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                <h1 className='font-bold'>{data.title.rendered}</h1>
                <div className="text-xs hover:line-clamp-6 line-clamp-2" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}></div>
            </div>
        </NavLink>
    )
}