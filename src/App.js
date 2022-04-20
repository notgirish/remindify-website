import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Knowmore from './pages/Knowmore';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="more" element={<Knowmore />} />
      </Routes>
      <Footer />
    </>
  )
}
