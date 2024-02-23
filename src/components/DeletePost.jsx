export default function DeletePost() {

    return (
        <div className="">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button type="button" className=" text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => document.getElementById('my_modal_3').showModal()}>Delete</button>
            <dialog id="my_modal_3" className="modal outline-none backdrop-blur-md">
                <div className="modal-box outline-none">
                    <h3 className="font-bold text-3xl flex justify-center pb-5">Are you sure you want to delete this post ??</h3> {/* Display the dynamic title */}
                    <div className="modal-action flex justify-between">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Yes</button>
                            <button className="btn">No</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
