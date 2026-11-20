
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage';
import NotFoundPage from './pages/NotFoundPage';
import ResearchAssistantPage from './pages/articles/ResearchAssistantPage';
import WebDeveloperPage from './pages/articles/WebDeveloperPage';
import LeaseAnalystPage from './pages/articles/LeaseAnalystPage';

import ScrollToHashElement from './components/ScrollToHashElement';
import Preloader from './components/Preloader';

import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const startTime = Date.now();
    const minimumDuration = 2000;

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumDuration - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-moon to-asian-pear">

      {isLoading && <Preloader />}

      <ScrollToHashElement />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/researchAssistant" element={<ResearchAssistantPage />} />
          <Route path="/webDeveloper" element={<WebDeveloperPage />} />
          <Route path="/leaseAnalyst" element={<LeaseAnalystPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
