import React, { useState, useEffect } from "react";
import axios from "axios";
import Preview from "./Preview";
import {
  MailOutline,
  AccountBox,
  LocationOn,
  Person,
  Close,
  Call,
} from "@mui/icons-material";
import {
  Button,
  Alert,
  Box,
  IconButton,
  InputAdornment,
  Collapse,
  TextField,
} from "@mui/material";
export const UserContext = React.createContext();
const Profile = () => {
  const user_id = 1;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [Myprofile, setMyprofile] = useState({});
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(true);
  const [timing, setTiming] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://rich-plum-abalone-ring.cyclic.app/user/${user_id}`
        );
        setMyprofile(response.data[0]);
        setFirstName(response.data[0].FirstName);
        setLastName(response.data[0].LastName);
        setDisplayName(response.data[0].DisplayName);
        setMail(response.data[0].Mail);
        setPhone(response.data[0].Phone);
        setLocation(response.data[0].Location);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
    setToday(
      new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date())
    );
    setTiming(
      new Date().getHours() < 12
        ? "Morning"
        : new Date().getHours() < 18
        ? "Afternoon"
        : "Evening"
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const id = user_id;
    const FirstName = firstName;
    const LastName = lastName;
    const DisplayName = displayName;
    const Mail = mail;
    const Phone = phone;
    const Location = location;
    const data = {
      FirstName,
      LastName,
      DisplayName,
      Mail,
      Phone,
      Location,
      id,
    };
    try {
      const response = await axios.put(
        `https://rich-plum-abalone-ring.cyclic.app/user/Update/${user_id}`,
        data
      );
      if (response.status === 200) {
        setMessage("Successfully Changed");
        setOpen(true);
      }
    } catch (error) {
      console.error(error);
    }
  }

  function clearState() {
    setFirstName(Myprofile.FirstName);
    setLastName(Myprofile.LastName);
    setDisplayName(Myprofile.DisplayName);
    setMail(Myprofile.Mail);
    setPhone(Myprofile.Phone);
    setLocation(Myprofile.Location);
  }

  const { DisplayName } = Myprofile;
  return (
    <>
      <div className="col-7 profile-layout container vh-100">
        <div className="greetings">
          <h3>
            Good {timing}, {DisplayName}
          </h3>
          <h6 className="text-muted">{today}</h6>
        </div>
        {}
        <div className="profile-tag">
          <h4>My Profile</h4>
        </div>
        <div className="profile">
          <div>
            <form>
              <div className="container form-box">
                <div className="row m-3">
                  <div className="col mt-5">
                    <TextField
                      label="First Name"
                      id="firstname"
                      value={firstName}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="col mt-5">
                    <TextField
                      label="Last Name"
                      id="lastname"
                      value={lastName}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row m-3">
                  <div className="col">
                    <TextField
                      label="Display Name"
                      id="displayname"
                      value={displayName}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountBox />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <TextField
                      label="Mail"
                      id="mail"
                      type="email"
                      value={mail}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <MailOutline />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row m-3">
                  <div className="col">
                    <TextField
                      label="Phone (Work)"
                      id="phone"
                      type="number"
                      value={phone}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Call />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <TextField
                      label="Location"
                      id="location"
                      value={location}
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOn />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row m-3">
                <div className="col mb-5 text-center">
                  <Button
                    variant="contained"
                    color="error"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </Button>
                </div>
                <div className="col mb-5 text-center">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={clearState}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </form>
            {message && (
              <Box sx={{ width: "100%" }}>
                <Collapse in={open}>
                  <Alert
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <Close fontSize="inherit" />
                      </IconButton>
                    }
                    sx={{ mb: 2 }}
                  >
                    {message}
                  </Alert>
                </Collapse>
              </Box>
            )}
          </div>
        </div>
      </div>
      <div className="col-3 mt-3">
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
            DisplayName,
          }}
        >
          <Preview />
        </UserContext.Provider>
      </div>
    </>
  );
};

export default Profile;
