import React from "react";
import { GoLocation } from "react-icons/go";
import style from "./location.module.css";
import { MdModeEdit } from "react-icons/md";
import { BiErrorCircle } from "react-icons/bi";
import Recommended from "./Recommended";

function Location() {
  return (
    <div className={style.container}>
      <div className={style.location}>
        <GoLocation />
        <p>Noida, India</p>
        <MdModeEdit />
      </div>
      <div className={style.locationDescription}>
        <BiErrorCircle color="rgb(151, 151, 151)" />
        <p>
          Your location will help us serve better and extend a personalised
          experience.
        </p>
      </div>
      <Recommended />
    </div>
  );
}

export default Location;
