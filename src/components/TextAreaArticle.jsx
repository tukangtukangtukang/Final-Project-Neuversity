import React from 'react'

export default function TextAreaArticle({ onChange }) {
    return (
        <div>
            <label htmlFor="message" className="block mb-2 pt-3 text-sm font-medium text-gray-900">Content</label>
            <textarea onChange={onChange} id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Tulis Konten Disini..."></textarea>
        </div>
    )
}
