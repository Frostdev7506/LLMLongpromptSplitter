import { useState } from "react";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <h1>Hi </h1>
    </>
  );
}

export default App;
