import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import NotFoundPage from './pages/NotFoundPage';
import ResearchAssistantPage from './pages/articles/ResearchAssistantPage';
import ScrollToHashElement from './components/ScrollToHashElement';
import './App.css';

function App() {

  return (
    <div className="App min-h-screen bg-gradient-to-b from-moon to-asian-pear">

      {/* Scroll to hash behavior on route change */}
      <ScrollToHashElement />

      {/* Main routing */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/researchAssistant" element={<ResearchAssistantPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
