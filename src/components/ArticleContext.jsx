import React, { createContext, useContext, useState, useEffect } from 'react';

// Buat konteks
const ArticleContext = createContext();

// Buat provider konteks
export const ArticleProvider = ({ children }) => {
    const [posts, setPosts] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [search, setSearch ] = useState('');

    return (
        <ArticleContext.Provider value={{ posts, setPosts, currentPage, setCurrentPage, totalPage, setTotalPage, search, setSearch }}>
            {children}
        </ArticleContext.Provider>
    );
};

// Buat custom hook untuk menggunakan konteks
export const useArticle = () => {
    return useContext(ArticleContext);
};
