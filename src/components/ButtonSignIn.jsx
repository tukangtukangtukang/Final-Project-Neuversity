import React from 'react'

export default function ButtonSignIn() {
    return (
        <div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className=" text-black text-base my-1 font-bold bg-gray-200 hover:bg-gray-400 focus:ring-gray-300 rounded-badge sm:w-full px-5 py-2.5 text-center "
                >
                    Sign In
                </button>
            </div>
        </div>
    )
}
