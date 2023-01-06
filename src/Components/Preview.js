import React from "react";
import PersonImg from "../Assets/Images/1.jpg";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddIcon from "@mui/icons-material/Add";
import LocationOn from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import { Button, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Preview = (props) => {
  return (
    <div className="container">
      <div className="d-flex">
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
            <span>{props.displayName}</span>
          </b>
          <br></br>
          <span>Project Manager</span>
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
            <p>{props.firstName}</p>
            <p>{props.lastName}</p>
          </div>

          <div>
            <p>{props.mail}</p>
          </div>
          <div className="previewicon">
            <CallIcon />
            <p>{props.phone}</p>
          </div>
          <br></br>
          <div className="previewicon">
            <LocationOn />
            <p>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
