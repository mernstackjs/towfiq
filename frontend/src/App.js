import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Panner from "./Components/Panner";
import Kontakt from "./Pages/Kontakt";
import Läxhjalp from "./Pages/Läxhjalp";
import Schema from "./Pages/Schema";
import Välja_Amne from "./Pages/Välja_Amne";

const App = () => {
  return (
    <div>
      <Navbar />
      <Panner />
      <Routes>
        <Route path="/schema" element={<Schema />} />
        <Route path="/välja-Amne" element={<Välja_Amne />} />
        <Route path="/läxhjalp" element={<Läxhjalp />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
};

export default App;
