import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import ScrollToHashElement from './components/ScrollToHashElement';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App min-h-screen bg-gradient-to-b from-moon to-asian-pear">
      {/* Conditionally render navbar */}
      {location.pathname === '/journey' && <Navbar />}

      {/* Scroll to hash behavior on route change */}
      <ScrollToHashElement />

      {/* Main routing */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
