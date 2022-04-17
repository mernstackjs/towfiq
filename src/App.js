import React from "react";
import Home from "./Pages/Home";
import DesktopImage from "./image/Desktop.png";
import { Route, Routes } from "react-router-dom";
import SinglePage from "./Pages/SinglePage";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Läxhjälp from "./Pages/Läxhjälp";
import About from "./Pages/About";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${DesktopImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Nav />
      <Routes>
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/Laxhjalp" element={<Läxhjälp />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
