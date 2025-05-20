import React from "react";
import "/src/App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content-container">
        <div className="main-content">
          <h1>Welcome</h1>
        </div>
      </div>
    </>
  );
}

export default App;
