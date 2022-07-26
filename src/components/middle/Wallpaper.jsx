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
