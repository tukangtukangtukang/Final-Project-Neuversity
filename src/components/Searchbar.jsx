import React, { useState } from 'react';
import logoSearch from '../assets/magnifier.svg';
import { useArticle } from './ArticleContext';

export default function Searchbar({ className }) {
    const { search, setSearch } = useArticle();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={className}>
            <form className="relative flex items-center" onSubmit={handleSubmit}>
                <img
                    src={logoSearch}
                    alt="Search"
                    className="absolute cursor-pointer items-center w-4 ms-4"
                />
                <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onInput={(e) => setSearch(e.target.value)}
                    className="h-10 input input-bordered w-full max-w-xs px-4 text-center rounded-3xl text-base text-white bg-neutral-300 border-none"
                />
            </form>
        </div>
    );
}
