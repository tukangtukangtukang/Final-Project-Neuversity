import ButtonUpload from "./ButtonUpload";
import TextAreaArticle from "./TextAreaArticle";

export default function CreatePost() {
    var title = "Create Post"; // Set the title to "Create Post"

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                <button onClick={() => document.getElementById('my_modal_2').showModal()} className="mr-4">
                    <img src="src/assets/kotak.png" alt="" className="w-60 h-44" />
                </button>
                <dialog id="my_modal_2" className="modal outline-none backdrop-blur-md">
                    <div className="modal-box outline-none">
                        <h3 className="font-bold text-3xl flex justify-center pb-5">Create New Post</h3>
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className="mb-5 ">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-black dark:text-black">Title</label>
                            <input
                                type="text"
                                id="title"
                                className="border bg-gray-200 text-sm rounded-xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                                placeholder="Tulis Judul Disini"
                                required
                            />
                        </div>
                        <TextAreaArticle />
                        <ButtonUpload />
                        <div className="modal-action">
                            {/* Close button */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_2').close()}>Close</button>
                        </div>
                    </div>
                </dialog>
                <h1 className="text-xl font-bold">Create New Post</h1>
            </div>
        </div>
    );
}
