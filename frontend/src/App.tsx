import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import GalleryPage from './pages/GalleryPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
