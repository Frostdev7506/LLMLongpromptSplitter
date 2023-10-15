import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPrompt from "./components/MainPrompt";

import "./App.css";

function App() {
  return (
    <div className="mainPage">
      <NavBar />
      <MainPrompt />

      <Footer />
    </div>
  );
}

export default App;
