import Swal from 'sweetalert2';
import React, { useState } from 'react';
import ButtonUpload from "./ButtonUpload";
import { useParams } from "react-router-dom";
import { getPosts } from "../utils/fetchData";
import { useArticle } from "./ArticleContext";

import TextAreaArticle from "./TextAreaArticle";

export default function EditPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { setPosts } = useArticle();
    const { id } = useParams();

    function handleSubmit(event) {
        event.preventDefault();
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                content: content
            }),
        };

        fetch(`https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts/${id}`, config)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Ambil data terbaru dari server
                getPosts().then(data => {
                    setPosts(data);
                    // Tutup modal
                    document.getElementById('my_modal_2').close();
                    // Tampilkan swal setelah modal ditutup
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post updated successfully.',
                        icon: 'success'
                    });
                });
            })
            .catch(error => {
                console.error('Error updating post:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to update post.',
                    icon: 'error'
                });
            });
        }
        return (
            <div className="w-6">
                <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
                <dialog id="my_modal_1" className="modal outline-none backdrop-blur-md">
                    <div className="modal-box outline-none">
                        <h3 className="font-bold text-3xl flex justify-center pb-5">Edit Post</h3>
                        <div className="mb-5">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-black dark:text-black">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="border bg-gray-200 text-sm rounded-xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                                    placeholder="Tulis Judul Disini"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    required
                                />
                                <TextAreaArticle value={content} onChange={(event) => setContent(event.target.value)} />
                                <ButtonUpload />
                                <div className="modal-action">
                                    <button className="btn" onClick={() => document.getElementById('my_modal_2').close()}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        )
    }

