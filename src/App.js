import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginOrSignup from "./components/LoginOrSignup";
import Dashboard from "./components/Dashboard";
import Inbox from "./components/Inbox";
import Rentals from "./components/Rentals";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import ListItem from "./components/ListItem";
import Instruction from "./components/Instruction";
import NotFound from "./components/NotFound";
import Item from "./components/Item";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/404" && <NavBar />}

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
        <Route exact path="/Item" element={<Item />} />
        <Route path="*" element={<Navigate to="/404" />} />
        <Route exact path="/404" element={<NotFound />} />
      </Routes>

      {pathname !== "/404" && <Footer />}
    </>
  );
}

export default App;
