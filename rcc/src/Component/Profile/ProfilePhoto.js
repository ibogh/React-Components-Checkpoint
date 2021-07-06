import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

function ProfilePhoto() {
  return (
    <div className="">
      <Image
        style={{ width: 150, height: 150 }}
        src="me.png"
        alt=""
        roundedCircle
      />
    </div>
  );
}

export default ProfilePhoto;
