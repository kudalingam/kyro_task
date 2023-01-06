import React, { useState, useEffect } from "react";
import axios from "axios";
import MailIcon from "@mui/icons-material/MailOutline";
import DisplayNameIcon from "@mui/icons-material/AccountBox";
import LocationIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { Button, InputAdornment, TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Profile = (props) => {
  const user_id = 1;
  const [Myprofile, setMyprofile] = useState({});
  useEffect((props) => {
    async function getUser1() {
      try {
        const response = await axios.get(
          `https://rich-plum-abalone-ring.cyclic.app/user/${user_id}`
        );
        console.log(response);
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
    getUser1();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("ok");
    // const data = Myprofile;
    const FirstName = props.firstName;
    const LastName = props.lastName;
    const DisplayName = props.displayName;
    const Mail = props.mail;
    const Phone = props.phone;
    const Location = props.location;
    const id = user_id;

    const data = {
      FirstName,
      LastName,
      DisplayName,
      Mail,
      Phone,
      Location,
      id,
    };
    console.log(data);
    try {
      console.log("Data", data);
      const response = await axios.put(
        `https://rich-plum-abalone-ring.cyclic.app/user/Update/${user_id}`,
        data
      );
      if (response.status === 200) {
        console.log("Updated successfully");
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

  return (
    <>
      <div className="profile">
        <div className="greetings">
          <h3>Welcome, {props.displayName}</h3>
        </div>
        <h4>My Profile</h4>

        <div>
          <form>
            <div className="container">
              <div className="row m-3">
                <div className="col">
                  <TextField
                    label="First Name"
                    id="firstname"
                    value={props.firstName}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setFirstName(e.target.value)}
                  />
                </div>
                <div className="col">
                  <TextField
                    label="Last Name"
                    id="lastname"
                    value={props.lastName}
                    sx={{ m: 1, width: "25ch" }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
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
                          <DisplayNameIcon />
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
                          <MailIcon />
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
                          <CallIcon />
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
                          <LocationIcon />
                        </InputAdornment>
                      ),
                    }}
                    onChange={(e) => props.setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row m-5">
              <div className="col text-center">
                <Button
                  variant="contained"
                  color="error"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Save Changes
                </Button>
              </div>
              <div className="col text-center">
                <Button variant="contained" color="error" onClick={clearState}>
                  Reset
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
