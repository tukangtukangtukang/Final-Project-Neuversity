import React, { useState } from 'react';
import Kotak from "../assets/kotak.png";
import ButtonUpload from './ButtonUpload';
import { getPosts } from '../utils/fetchData';
import { useArticle } from './ArticleContext';
import TextAreaArticle from './TextAreaArticle';
import Swal from 'sweetalert2';

export default function CreatePost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { setPosts } = useArticle();

    function handleSubmit(event) {
        event.preventDefault();

        console.log({ title, content });

        // Buat FormData untuk mengirim data form dan file ke server
        const config = {
            method: "POST",
            body: JSON.stringify({ title, content, status: "publish" }), // Gunakan FormData sebagai body
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token"),
            }
        };

        fetch("https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts", config)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Tutup modal
                document.getElementById('my_modal_2').close();
                // Ambil data terbaru dari server
                getPosts().then(data => {
                    setPosts(data);
                });
                // Munculkan SweetAlert setelah modal ditutup
                Swal.fire({
                    title: 'Success!',
                    text: 'Post created successfully.',
                    icon: 'success'
                });
            })
            .catch(error => {
                console.error('Error creating post:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to create post.',
                    icon: 'error'
                });
            });
    }

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <button onClick={() => document.getElementById('my_modal_2').showModal()} className="mr-4">
                    <img src={Kotak} alt="" className="w-60 h-40" />
                </button>
                <dialog id="my_modal_2" className="modal outline-none backdrop-blur-md">
                    <div className="modal-box outline-none">
                        <h3 className="font-bold text-3xl flex justify-center pb-5">Create New Post</h3>
                        <div className="mb-5">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="title" className="block mb-2 pt-3 text-sm font-medium text-black dark:text-black">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="border bg-gray-200 text-sm rounded-xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                                    value={title}
                                    onChange={(event) => setTitle(event.target.value)}
                                    placeholder="Tulis Judul Disini"
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
                </dialog >
                <h1 className="text-xl font-bold">Create New Post</h1>
            </div >
        </div >
    );
}
