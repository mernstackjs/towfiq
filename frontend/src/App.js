import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Panner from "./Components/Panner";
import Kontakt from "./Pages/Kontakt";
import Läxhjalp from "./Pages/Läxhjalp";
import Schema from "./Pages/Schema";
import VäljaAmne from "./Pages/VäljaAmne";

const App = () => {
  return (
    <div>
      <Navbar />
      <Panner />
      <Routes>
        <Route path="/schema" element={<Schema />} />
        <Route path="/välja-Amne" element={<VäljaAmne />} />
        <Route path="/läxhjalp" element={<Läxhjalp />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
};

export default App;
