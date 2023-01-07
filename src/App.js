import React from "react";
import MenuBar from "./Components/MenuBar";
import Profile from "./Components/Profile";

// export const UserContext = React.createContext();

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [mail, setMail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [location, setLocation] = useState("");
  // const [displayName, setDisplayName] = useState("");

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-center align-items-center">
        <div className="column3 text-center">
          <MenuBar />
        </div>
        <Profile />
        {/* <div className="col-7 profile-layout">
          <UserContext.Provider
            value={{
              firstName,
              setFirstName,
              lastName,
              setLastName,
              mail,
              setMail,
              phone,
              setPhone,
              location,
              setLocation,
              displayName,
              setDisplayName,
            }}
          >
            <Profile />
          </UserContext.Provider>
        </div> */}
        {/* <div className="col-3 ">
          <UserContext.Provider
            value={{
              firstName,
              setFirstName,
              lastName,
              setLastName,
              mail,
              setMail,
              phone,
              setPhone,
              location,
              setLocation,
              displayName,
              setDisplayName,
            }}
          >
            <Preview />
          </UserContext.Provider>
        </div> */}
      </div>
    </div>
  );
}

export default App;
