import React from 'react'

export default function UsernameLoginAdmin() {
    return (
        <div className="mb-5">
            <label htmlFor="username" className="block mb-2 text-base font-medium text-black dark:text-black">Username</label>
            <input
                placeholder='Username'
                type="username"
                id="username"
                className="border bg-gray-200 text-sm rounded-3xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-200 dark:text-black dark:focus:ring-gray-200 dark:focus:border-gray-200"
                required
            />
        </div>
    )
}
