import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="mainPage">
      <NavBar />

      <Footer />
    </div>
  );
}

export default App;
