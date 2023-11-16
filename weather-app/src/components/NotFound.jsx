import React from "react";

const NotFound = () => {
  console.log("Rendering NotFound component");
  return (
    <div className="not-found">
      <img src="./images/404.png" alt="Not Found" />
      <p>Oops! Invalid location :/</p>
    </div>
  );
};

export default NotFound;
