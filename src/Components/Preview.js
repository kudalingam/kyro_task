import React from "react";
import PersonImg from "../Assets/Images/1.jpg";
import {
  PhotoCamera,
  MailOutline,
  LocationOn,
  Add,
  Call,
  ArrowDropDown,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { UserContext } from "../Components/Profile";
import PreviewText from "./PreviewText";

const Preview = () => {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div className="container vh-100">
              <div className="d-flex preview-top">
                <Button size="small" variant="contained" color="error">
                  <Add fontSize="small" />
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
                  <ArrowDropDown />
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
                  <div className="previewname fs-5 text-bold">
                    <p>{user.firstName}</p>
                    <p>{user.lastName}</p>
                  </div>

                  <PreviewText
                    icon={<MailOutline color="disabled" />}
                    name={user.mail}
                  />
                  <PreviewText
                    icon={<Call color="disabled" />}
                    name={user.phone}
                  />
                  <PreviewText
                    icon={<LocationOn color="disabled" />}
                    name={user.location}
                  />
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
