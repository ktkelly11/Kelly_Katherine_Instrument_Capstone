// import { useState } from 'react'
import "./App.css";
// import NavBar from "./components/navBar/NavBar.jsx";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HelpsPage from "./pages/HelpsPage";
import CommentsPage from "./pages/CommentsPage";
import DonationsPage from "./pages/DonationsPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/helps" element={<HelpsPage />} />
          <Route path="/comments" element={<CommentsPage />} />
          <Route path="/donations" element={<DonationsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
