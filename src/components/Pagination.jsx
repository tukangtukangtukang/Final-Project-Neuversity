import { useArticle } from "./ArticleContext";

export default function Pagination() {
    const { currentPage, setCurrentPage, totalPage } = useArticle();

    function handleNext() {
        setCurrentPage((prev) => prev + 1);
    }

    function handlePrev() {
        setCurrentPage((prev) => prev - 1);
    }

    return (
        <div className='md:py-6 flex justify-center'>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-8 text-base">
                    <li className="">
                        <button disabled={currentPage == 1} onClick={handlePrev} className="flex items-center justify-center px-2 h-8 ms-0 leading-tight text-white bg-white border border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <a href="" className="flex items-center justify-center px-2 h-8 leading-tight text-white bg-white border hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">{currentPage}/{totalPage}</a>
                    </li>

                    {/* ... other pages ... */}
                    <li>
                        <button disabled={currentPage == totalPage} onClick={handleNext} className="flex items-center justify-center px-2 h-8 leading-tight text-white bg-white border rounded-e-lg hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
