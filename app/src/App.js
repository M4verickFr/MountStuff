import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import MobileMenu from "./components/mobileMenu";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clothing from "./pages/Clothing";
// import Profile from "./pages/Profile";

import Footer from "./components/footer"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/clothing" element={<Clothing />} />
          {/* <Route exact path="/profile/:name" element={<Profile />} /> */}
        </Routes>
      <MobileMenu />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
