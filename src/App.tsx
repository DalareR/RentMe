import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      {/* <Login /> */}
    </div>
  );
}

export default App;
