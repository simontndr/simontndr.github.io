import React, { useState, useEffect, useCallback } from 'react';
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

const MINIMUM_DURATION = 2000;

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timeoutId;
    const startTime = Date.now();

    const handleLoad = () => {
      const remaining = Math.max(0, MINIMUM_DURATION - (Date.now() - startTime));
      timeoutId = setTimeout(() => setReady(true), remaining);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeoutId);
    };
  }, []);

  const handlePreloaderComplete = useCallback(() => setShowPreloader(false), []);

  return (
    <div className="App min-h-screen bg-gradient-to-b from-moon to-asian-pear">

      {showPreloader && (
        <Preloader ready={ready} onComplete={handlePreloaderComplete} />
      )}

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