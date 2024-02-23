// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SinglePage from './pages/SinglePage';
import SearchedPage from './pages/SearchedPage';
import LoginAdmin from './pages/LoginAdmin';
import HomepageAdmin from './pages/HomepageAdmin';
import { ArticleProvider } from './components/ArticleContext';

export default function App() {
  return (
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* Biar per page punya id sendiri */}
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/search" element={<SearchedPage />} />
          <Route path="/login" element={<LoginAdmin />} />
          <Route path="/admin" element={<HomepageAdmin />} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  );
}
