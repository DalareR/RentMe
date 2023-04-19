import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      {/* <Login /> */}
    </div>
  );
}

export default App;
