import ButtonUpload from "./ButtonUpload";
import TextAreaArticle from "./TextAreaArticle";

export default function EditPost() {

    var title = "Edit Post";

    // function handleSubmit(event) {
    //     const config = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username: username,
    //             password: password
    //         }),
    //     };

        // Define the title based on whether it's in edit mode or create mode
        return (
            <div className="w-6">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className=" text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
                <dialog id="my_modal_1" className="modal outline-none backdrop-blur-md">
                    <div className="modal-box outline-none">
                        <h3 className="font-bold text-3xl flex justify-center pb-5">{title}</h3> {/* Display the dynamic title */}
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
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
                                type="title"
                                id="title"
                                className="border bg-gray-200 text-sm rounded-xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5"
                                placeholder="Tulis Judul Disini"
                                required
                            />
                        </div>
                        <TextAreaArticle />
                        <div>
                            <ButtonUpload />
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        )
    }
