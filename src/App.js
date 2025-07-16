import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JourneyPage from './pages/JourneyPage'; // Assuming you have a JourneyPage component
import NotFoundPage from './pages/NotFoundPage'; // Assuming you have a NotFoundPage component
import Navbar from './components/Navbar';
import './App.css';


function App() {

  const location = useLocation();

  return (
    <div className="App min-h-screen bg-gradient-to-b from-moon to-asian-pear">
      {/* Main content area */}
      {location.pathname!=='/' && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />   
          {/* Catch all route for 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;