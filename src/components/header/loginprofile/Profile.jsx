import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import img from "./p4.png";
import style from "./profile.module.css";

export const Profile = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={img} className={style.profileImg} alt="img" />
      <p className={style.name}>Siddharth Goyal</p>
      <AiFillCaretDown />
    </div>
  );
};
