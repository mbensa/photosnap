import React from 'react';
import './App.css';
import Main from './pages/Main';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Stories from './pages/Stories';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </main>
  );
}
