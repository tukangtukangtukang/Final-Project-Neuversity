import React, { useState } from 'react';
import logoSearch from '../assets/magnifier.svg';
import { useNavigate } from 'react-router-dom';

export default function Searchbar({ className }) {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Redirect to the SearchedPage with the search query
        navigate(`/search?q=${encodeURIComponent(searchInput)}`);
    };

    return (
        <div className={className}>
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <img
                    src={logoSearch}
                    alt="Search"
                    className="absolute cursor-pointer items-center w-4 ms-4"
                    onClick={handleSearchSubmit}
                />
                <input
                    type="search"
                    placeholder="Search"
                    value={searchInput}
                    onChange={handleInputChange}
                    className="h-10 input input-bordered w-full max-w-xs px-4 text-center rounded-3xl text-base text-white bg-neutral-300 border-none"
                />
            </form>
        </div>
    );
}
