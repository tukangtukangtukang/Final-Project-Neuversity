import Swal from 'sweetalert2';
import { getPosts } from '../utils/fetchData';
import { useArticle } from './ArticleContext';

export default function DeletePost({ id }) {
    const { setPosts } = useArticle();

    const handleDelete = () => {
        fetch(`https://blog-fe-batch5.neuversity.id/blog-fe-batch5/wp-json/wp/v2/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')} `,
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                getPosts().then(data => {
                    setPosts(data);
                    console.log(data);
                    document.getElementById('modal_delete').close();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post deleted successfully.',
                        icon: 'success'
                    });
                });
            })
            .catch(error => {
                console.error('Error deleting post:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete post.',
                    icon: 'error'
                });
            });
    };

    return (
        <div className="">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => document.getElementById('modal_delete' + id).showModal()}>Delete</button>
            <dialog id={"modal_delete" + id} className="modal outline-none backdrop-blur-md">
                <div className="modal-box outline-none">
                    <form>
                        <h3 className="font-bold text-3xl flex justify-center pb-5">Are you sure you want to delete this post ??</h3> {/* Display the dynamic title */}
                        <div className="modal-action flex justify-between">
                            <button type='button' className="btn" onClick={handleDelete}>Yes</button>
                            <button className="btn" onClick={() => document.getElementById('modal_delete').close()}>No</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
