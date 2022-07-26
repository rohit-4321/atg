import React from "react";
import style from "./navHeader.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import joinIcon from "./joinicon.png";

export const NavHeader = () => {
  return (
    <div className="sticky">
      <div className="d-none d-md-block d-lg-block d-xl-block">
        <div className={` ${style.navContainer}`}>
          <div>
            <p>All Posts(32)</p>
          </div>
          <div>
            <p>Article</p>
          </div>
          <div>
            <p>Event</p>
          </div>
          <div>
            <p>Educations</p>
          </div>
          <div>
            <p>Jobs</p>
          </div>

          <button className={style.postbutton}>
            <span>Write a post</span>
            <AiFillCaretDown />
          </button>
          <button className={style.joinButton}>
            <img src={joinIcon} alt="img" />
            <span>Join Group</span>
          </button>
        </div>
      </div>
      <MobileNavBar />
    </div>
  );
};

const MobileNavBar = () => {
  return (
    <div className={`d-sm-block d-xs-block d-md-none d-lg-none `}>
      <div className={style.mobileNavBar}>
        <p>Posts(368)</p>
        <button>
          <span>Filter: All</span>
          <AiFillCaretDown />
        </button>
      </div>
    </div>
  );
};
