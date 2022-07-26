import React from "react";
import style from "./recommended.module.css";

function Recommended() {
  return (
    <div className={style.container}>
      <div className={`${style.header} d-flex align-items-center`}>
        <img
          src={require("./thumb.png")}
          alt="img"
          className={style.thumbIcon}
        />
        <p className={style.heading}>RECOMMENDED GROUPS</p>
      </div>
      <Recommendation profileUrl={"./g1.png"} name={"Leisure"} />
      <Recommendation profileUrl={"./g2.png"} name={"Activism"} />
      <Recommendation profileUrl={"./g3.png"} name={"MBA"} />
      <Recommendation profileUrl={"./g4.png"} name={"Philosophy"} />
      <div className="d-flex justify-content-end">
        <a className={style.seeMore}>See more..</a>
      </div>
    </div>
  );
}
const Recommendation = ({ profileUrl, name }) => {
  return (
    <div className={`d-flex align-items-center ${style.recommendItem}`}>
      <img src={require(`${profileUrl}`)} alt="img" className={style.grpImg} />
      <p>{name}</p>
      <button className={style.followBtn}>
        <span>Follow</span>
      </button>
    </div>
  );
};

export default Recommended;
