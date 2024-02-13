import { NavLink } from "react-router-dom"
export default function PostArticleHomepage({ data }) {
    return (
        <NavLink to="/singlepage" >
            <div className='w-60 mx-auto'>
                <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                <h1 className='font-bold'>{data.title.rendered}</h1>
                <p className="text-xs">{data.excerpt.rendered}</p>
            </div>
        </NavLink>
    )
}