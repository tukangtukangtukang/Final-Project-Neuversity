// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SinglePage from './pages/SinglePage';
import SearchedPage from './pages/SearchedPage';
import LoginAdmin from './pages/LoginAdmin';
import Pagination from './components/Pagination'; // Import komponen pagination
import HomepageAdmin from './pages/HomepageAdmin';

export default function App() {
  return (
    <BrowserRouter>
      {/* Komponen pagination di luar elemen <Routes> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/singlepage" element={<SinglePage />} />
        <Route path="/search" element={<SearchedPage />} />
        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/admin" element={< HomepageAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}
