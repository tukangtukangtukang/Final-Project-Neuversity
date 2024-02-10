export default function Pagination() {
    return (
        <div className='pt-5 flex justify-center'>
            <nav aria-label="Page navigation example">
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li className="">
                        <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-white bg-white border border-e-0 rounded-s-lg hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="http://localhost:5173" className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-white border hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">1</a>
                    </li>
                    <li>
                        <a href="/page/2" className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-white border hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">2</a>
                    </li>
                    {/* ... other pages ... */}
                    <li>
                        <a href="/page/5" className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-white border rounded-e-lg hover:bg-gray-100 hover:text-white-bg-gray-400 dark:bg-neutral-300 dark:text-white-400 dark:hover:bg-gray-400 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
