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
import { Alert, Box, IconButton, Collapse } from "@mui/material";
import InputField from "./InputField";
import ButtonField from "./ButtonField";
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
  const [update, setUpdate] = useState(false);
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
        setFirstName(response.data[0].FirstName);
        setLastName(response.data[0].LastName);
        setDisplayName(response.data[0].DisplayName);
        setMail(response.data[0].Mail);
        setPhone(response.data[0].Phone);
        setLocation(response.data[0].Location);
        setMyprofile(response.data[0]);
        setUpdate(false);
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
  }, [update]);

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
        console.log(response);
        setMessage("Successfully Changed");
        setOpen(true);
        setUpdate(true);
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
                  <InputField
                    label="First Name"
                    id="firstname"
                    value={firstName}
                    icon={<Person />}
                    change={setFirstName}
                  />
                  <InputField
                    label="Last Name"
                    id="lastname"
                    value={lastName}
                    icon={<Person />}
                    change={setLastName}
                  />
                </div>
                <div className="row m-3">
                  <InputField
                    label="Display Name"
                    id="displayname"
                    value={displayName}
                    icon={<AccountBox />}
                    change={setDisplayName}
                  />
                  <InputField
                    label="Mail"
                    id="mail"
                    value={mail}
                    icon={<MailOutline />}
                    change={setMail}
                  />
                </div>
                <div className="row m-3">
                  <InputField
                    label="Phone"
                    id="phone"
                    value={phone}
                    icon={<Call />}
                    change={setPhone}
                  />
                  <InputField
                    label="Location"
                    id="location"
                    value={location}
                    icon={<LocationOn />}
                    change={setLocation}
                  />
                </div>
              </div>
              <div className="row m-3">
                <ButtonField click={handleSubmit} name="Save Changes" />
                <ButtonField click={clearState} name="Reset" />
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
