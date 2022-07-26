import React from "react";
import style from "./post.module.css";
import threeDot from "./threedot.png";
import { GrView } from "react-icons/gr";
import { BsFillShareFill } from "react-icons/bs";

export const Posts = ({ post }) => {
  return (
    <div className={style.singlePost}>
      <img
        src={require(`${post.backgroundImg}`)}
        alt="img"
        className={style.img}
      />
      <Content post={post} />
    </div>
  );
};
const Content = ({ post }) => {
  return (
    <div className={style.postContent}>
      <p className={style.topic}>{post.topic}</p>
      <div className={style.headingContent}>
        <p>{post.heading}</p>
        <img src={threeDot} alt="img" />
      </div>
      <p className={style.discription}>{post.description}</p>
      <div className={style.profileContainer}>
        <img src={require(`${post.profileImg}`)} alt="img" />
        <p className={style.name}>{post.name}</p>
        <GrView />
        <p className={style.views}>1.4k views</p>
        <button className={style.share}>
          <BsFillShareFill />
        </button>
      </div>
    </div>
  );
};
