// import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro";
import Places from "./pages/Places";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Join from "./pages/Join";

function App() {
  // let navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/join" element={<Join />} />
      <Route path="/home" element={<Intro />} />
      <Route path="/places" element={<Places />} />
    </Routes>
  );
}

export default App;
