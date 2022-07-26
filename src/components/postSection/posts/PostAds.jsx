import React from "react";
import style from "./post.module.css";
import backgroundImg from "./b1.png";
import threeDot from "./threedot.png";
import profileImg from "./p1.png";
import { GrView } from "react-icons/gr";
import { BsFillShareFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";

export const PostsAds = ({ post }) => {
  return (
    <div className={style.singlePost}>
      {post.backgroundImg ? (
        <img
          src={require(`${post.backgroundImg}`)}
          alt="img"
          className={style.img}
        />
      ) : null}

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
      {/* /// */}
      <div className={style.postLocationSection}>
        <RiCalendarEventFill />
        <span>{post.date}</span>
        <GoLocation />
        <span>{post.location}</span>
      </div>
      <button className={style.adButton}>
        <span style={{ color: post.color }}>{post.buttonText}</span>
      </button>

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
