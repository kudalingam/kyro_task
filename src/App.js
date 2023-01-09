import React from "react";
import MenuBar from "./Components/MenuBar";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <div className="column3 text-center">
          <MenuBar />
        </div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
