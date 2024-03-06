import React from 'react';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

export default function PostArticleSearchedPageAdmin({ data }) {
    return (
        <div className="relative flex w-80 ">
            <img src="https://picsum.photos/seed/picsum/205/161" alt="" className="rounded-badge" />
            <h1 className="absolute text-xl pt-28 ps-5 font-bold text-white w-40 truncate">
                {data.title.rendered}
            </h1>
            <div className="flex ps-2 w-44 flex-col justify-between ">
                <div className="text-xs line-clamp-2 break-all" dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}>
                </div>
                <div className="flex gap-10">
                    <EditPost id={data.id}/>
                    <DeletePost id={data.id}/>
                </div>
            </div>
        </div>
    );
}
