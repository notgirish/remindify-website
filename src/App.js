import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Knowmore from './pages/Knowmore';

export default function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/more" element={<Knowmore />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  )
}
