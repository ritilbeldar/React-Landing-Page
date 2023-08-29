import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        {/* navbar start */}
        <NavBar />
        {/* navbar end */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        {/* footer start  */}
        <Footer />
        {/* footer end  */}
      </div>
    </BrowserRouter>
  );
};

export default App;
