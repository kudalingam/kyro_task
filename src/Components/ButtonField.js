import React from "react";
import { Button } from "@mui/material";
const ButtonField = (props) => {
  const { click, name } = props;
  return (
    <>
      <div className="col mb-3 text-center">
        <Button variant="contained" color="error" onClick={click}>
          {name}
        </Button>
      </div>
    </>
  );
};

export default ButtonField;
