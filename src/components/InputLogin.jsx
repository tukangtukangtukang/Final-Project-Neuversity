import React from 'react'

export default function InputLogin({ name, label, placeholder = "default", type = "text", onInput }) {
    return (
        <div className='py-1'>
            <label htmlFor={name} className="block mb-2 text-base font-medium text-black dark:text-black">{label}</label>
            <input id={name} onInput={onInput} name={name} type={type} placeholder={placeholder} className="border bg-gray-200 text-sm rounded-3xl focus:ring-gray-200 focus:border-gray-200 block w-full p-2.5 placeholder:text-slate-500" />
        </div>
    )
}