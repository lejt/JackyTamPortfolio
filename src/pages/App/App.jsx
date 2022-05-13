import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../HomePage/HomePage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";

import ProjectsPage from "../ProjectsPage/ProjectsPage";
import ResumePage from "../ResumePage/ResumePage";
import ContactPage from "../ContactPage/ContactPage";

function App() {
  return (
    <main className="App">
        {/* <ProfileInfo /> */}
        <Routes>
          <Route path="/projects" element={< ProjectsPage />} />
          <Route path="/resume" element={< ResumePage />} />
          <Route path="/contact" element={< ContactPage />} />
          <Route path="/*" element={< HomePage />} />
        </Routes>
        {/* <Navbar /> */}
        <Footer />
    </main>
  );
}

export default App;
