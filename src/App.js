import React, { useState } from "react";
import MenuBar from "./Components/MenuBar";
import Profile from "./Components/Profile";
import Preview from "./Components/Preview";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [displayName, setDisplayName] = useState("");

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <div className="column3 text-center">
          <MenuBar />
        </div>
        <div className="col-7 profile-layout">
          <Profile
            firstName={firstName}
            lastName={lastName}
            mail={mail}
            phone={phone}
            location={location}
            displayName={displayName}
            setDisplayName={setDisplayName}
            setLocation={setLocation}
            setPhone={setPhone}
            setMail={setMail}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        </div>
        <div className="col-3">
          <Preview
            firstName={firstName}
            lastName={lastName}
            mail={mail}
            phone={phone}
            location={location}
            displayName={displayName}
            setDisplayName={setDisplayName}
            setLocation={setLocation}
            setPhone={setPhone}
            setMail={setMail}
            setFirstName={setFirstName}
            setLastName={setLastName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
