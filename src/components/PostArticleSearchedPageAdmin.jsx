import React from 'react'
import EditPost from './EditPost'
import DeletePost from './DeletePost'

export default function PostArticleSearchedPageAdmin() {
    return (
        < div className="relative flex w-80" >
            <img src="https://picsum.photos/seed/picsum/205/161" alt="" className="rounded-badge" />
            <h1 className="absolute text-2xl pt-28 ps-5 font-bold text-white">Title</h1>
            <div className="ps-2 w-44">
                <p className="text-xs ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, doloribus aperiam. Magnam?</p>
                <div className="flex pt-16 gap-10">
                    <EditPost />
                    <DeletePost />
                </div>
            </div>
        </div >
    )
}
