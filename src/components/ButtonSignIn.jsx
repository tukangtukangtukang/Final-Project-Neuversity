import React from 'react'
import Swal from 'sweetalert2';

export default function ButtonSignIn() {
        return (
            <div className="flex justify-center">
                <button
                    id='button'
                    type="submit"
                    className=" text-black text-base font-bold bg-gray-200 hover:bg-gray-400 focus:ring-gray-300 rounded-badge w-full px-5 py-2.5 text-center "
                >
                    Sign In

                </button>
            </div>
        )
    }
