import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;