import { NavLink } from "react-router-dom";
import FeaturedArticleHomepage from "./FeaturedArticleHomepage";

export default function ArticleHomepage() {
    return (
        <div className="container justify-center gap-5">
            <NavLink to="/" >
                <FeaturedArticleHomepage />
            </NavLink>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 justify-center container px-7'>
                <NavLink to="/singlepage" >
                    <div className='w-60 mx-auto pb-5'>
                        <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                        <h1 className='font-bold'>Title</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor.</p>
                    </div>
                </NavLink>
                <NavLink to="/" >
                    <div className='w-60 mx-auto'>
                        <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                        <h1 className='font-bold'>Title</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor.</p>
                    </div>
                </NavLink>
                <NavLink to="/" >
                    <div className='w-60 mx-auto'>
                        <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                        <h1 className='font-bold'>Title</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor.</p>
                    </div>
                </NavLink>
                <NavLink to="/" >
                    <div className='w-60 mx-auto'>
                        <img src="https://picsum.photos/seed/picsum/281/184" alt="" className='w-80 rounded-badge mx-auto' />
                        <h1 className='font-bold'>Title</h1>
                        <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolor.</p>
                    </div>
                </NavLink>

            </div>
        </div>
    )
}
