import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Inbox from "./components/Inbox";
import Rentals from "./components/Rentals";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/LoginOrSignup" element={<LoginOrSignup />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Inbox" element={<Inbox />} />
        <Route exact path="/Rentals" element={<Rentals />} />
        <Route exact path="/Favorites" element={<Favorites />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/ListItem" element={<ListItem />} />
        <Route exact path="/Instruction" element={<Instruction />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
