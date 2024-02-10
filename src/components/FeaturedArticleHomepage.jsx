import React from 'react'

export default function FeaturedArticleHomepage() {
    return (
        <div className="relative flex my-7 mx-auto">
            <img src="https://picsum.photos/seed/picsum/1218/451" alt="" className="mx-auto rounded-badge w-11/12 h-56 object-cover object-center" />
            <h1 className="absolute text-5xl font-bold mt-28 ms-28 sm:ms-20">Title</h1>
            <p className="absolute pt-5 px-2 mt-36 ms-28 text-balance text-sm sm:ms-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fugiat dolore illo? Consectetur, eos tenetur.</p>
        </div>
    )
}
