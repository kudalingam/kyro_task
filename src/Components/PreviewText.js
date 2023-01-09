import React from "react";

const PreviewText = (props) => {
  const { icon, name } = props;
  return (
    <>
      <div className="previewicon">
        {icon}
        <p>{name}</p>
      </div>
      <br></br>
    </>
  );
};

export default PreviewText;
