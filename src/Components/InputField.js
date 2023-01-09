import React from "react";

import { InputAdornment, TextField } from "@mui/material";
const InputField = (props) => {
  const { label, id, value, change, icon } = props;
  return (
    <>
      <div className="col">
        <TextField
          label={label}
          id={id}
          value={value}
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          }}
          onChange={(e) => change(e.target.value)}
        />
      </div>
    </>
  );
};

export default InputField;
