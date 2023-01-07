import React from "react";
import PersonImg from "../Assets/Images/1.jpg";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import LocationOn from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { Button, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { UserContext } from "../Components/Profile";

const Preview = () => {
  // const user = useContext(UserContext);

  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div className="container vh-100">
              <div className="d-flex preview-top">
                <Button size="small" variant="contained" color="error">
                  <AddIcon fontSize="small" />
                  Add Project
                </Button>
                <img
                  src={PersonImg}
                  className="rounded-3 m-1"
                  alt="User Img"
                  width={35}
                  height={35}
                />
                <div>
                  <b>
                    <span>{user.DisplayName}</span>
                  </b>
                  <br></br>
                  <span>Developer</span>
                </div>
                <div>
                  <ArrowDropDownIcon />
                </div>
              </div>
              <div className="pre">
                <div className="text-center person-img">
                  <img
                    src={PersonImg}
                    className="rounded-3"
                    alt="User Img"
                    width={200}
                    height={200}
                  />
                  <IconButton aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
                  </IconButton>
                </div>

                <div className="previewtext">
                  <div className="previewname">
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>

                  <div>
                    <p>{user.mail}</p>
                  </div>
                  <div className="previewicon">
                    <CallIcon />
                    <p>{user.phone}</p>
                  </div>
                  <br></br>
                  <div className="previewicon">
                    <LocationOn />
                    <p>{user.location}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </UserContext.Consumer>
    </>
  );
};

export default Preview;
