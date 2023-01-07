import React, { useState, useEffect } from "react";
import axios from "axios";
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

const Profile = (props) => {
  const user_id = 1;
  const [Myprofile, setMyprofile] = useState({});
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(true);
  useEffect((props) => {
    async function getUser() {
      try {
        const response = await axios.get(
          `https://rich-plum-abalone-ring.cyclic.app/user/${user_id}`
        );
        setMyprofile(response.data[0]);
        props.setFirstName(response.data[0].FirstName);
        props.setLastName(response.data[0].LastName);
        props.setDisplayName(response.data[0].DisplayName);
        props.setMail(response.data[0].Mail);
        props.setPhone(response.data[0].Phone);
        props.setLocation(response.data[0].Location);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const id = user_id;
    const FirstName = props.firstName;
    const LastName = props.lastName;
    const DisplayName = props.displayName;
    const Mail = props.mail;
    const Phone = props.phone;
    const Location = props.location;
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
        console.log(message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const clearState = () => {
    props.setFirstName(Myprofile.FirstName);
    props.setLastName(Myprofile.LastName);
    props.setDisplayName(Myprofile.DisplayName);
    props.setMail(Myprofile.Mail);
    props.setPhone(Myprofile.Phone);
    props.setLocation(Myprofile.Location);
  };

  const { DisplayName } = Myprofile;

  return (
    <div className="container vh-100">
      <div className="greetings">
        <h3>Welcome, {DisplayName}</h3>
      </div>
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
                    value={props.firstName}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setFirstName(e.target.value)}
                  />
                </div>
                <div className="col mt-5">
                  <TextField
                    label="Last Name"
                    id="lastname"
                    value={props.lastName}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="col">
                  <TextField
                    label="Display Name"
                    id="displayname"
                    value={props.displayName}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBox />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setDisplayName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <TextField
                    label="Mail"
                    id="mail"
                    type="email"
                    value={props.mail}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutline />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setMail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row m-3">
                <div className="col">
                  <TextField
                    label="Phone (Work)"
                    id="phone"
                    type="number"
                    value={props.phone}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Call />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setPhone(e.target.value)}
                  />
                </div>
                <div className="col">
                  <TextField
                    label="Location"
                    id="location"
                    value={props.location}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOn />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setLocation(e.target.value)}
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
                <Button variant="contained" color="error" onClick={clearState}>
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
  );
};

export default Profile;
