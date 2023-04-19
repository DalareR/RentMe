import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [signInCollapsed, setSignInCollapsed] = useState(true);

  return (
    <div className="App">
      <NavBar setSignInCollapsed={setSignInCollapsed} />
      <Hero />
      <Login
        signInCollapsed={signInCollapsed}
        setSignInCollapsed={setSignInCollapsed}
      />
    </div>
  );
}

export default App;
