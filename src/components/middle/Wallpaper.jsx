import React from "react";
import style from "./wallpaper.module.css";
import img from "./backgroundimag.png";
import imgmobile from "./imgmobileview.png";
import { IoMdArrowBack } from "react-icons/io";

function Wallpaper() {
  return (
    <div className={style.wallpaper}>
      <img src={img} className="d-none d-lg-block d-xl-block" alt="img " />
      <img src={imgmobile} className="d-lg-none d-xl-none" alt="img " />
      <WallpaperText />
      <div className="d-lg-none d-xl-none">
        <div
          className={`d-flex align-items-center justify-content-betwwen ${style.navheader}`}
        >
          <IoMdArrowBack className={style.backIcon} color="white" />
          <button>
            <span>Join Group</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const WallpaperText = () => {
  return (
    <div className={style.wallpaperText}>
      <h1>Computer Engineering </h1>
      <p>142,765 Computer Engineers follow this</p>
    </div>
  );
};

export default Wallpaper;
