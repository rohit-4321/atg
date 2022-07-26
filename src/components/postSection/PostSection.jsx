import React from "react";
import Location from "./locationComp/Location";
import { NavHeader } from "./navHeader/NavHeader";
import { Posts } from "./posts/Post";
import { PostsAds } from "./posts/PostAds";
import style from "./postSection.module.css";

let postList = [
  {
    backgroundImg: "./b1.png",
    topic: "✍️ Article",
    heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profileImg: "./p1.png",
    name: "Sarthak Kamra",
  },
  {
    backgroundImg: "./b2.png",
    topic: "🔬️ Education",
    heading:
      "Tax Benefits for Investment under National Pension Scheme launched by Government",
    description:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profileImg: "./p2.png",
    name: "Sarah West",
  },
];
let PostAdsList = [
  {
    backgroundImg: "./b3.png",
    topic: "🗓️ Meetup",
    heading: "Finance & Investment Elite Social Mixer @Lujiazui",
    date: "Fri, 12 Oct, 2018",
    location: "Ahmedabad, India",
    buttonText: "Visit Website",
    profileImg: "./p3.png",
    name: "Sarah West",
    color: "orange",
  },
  {
    backgroundImg: "",
    topic: "💼️ Job",
    heading: "Software Developer",
    date: "Innovaccer Analytics Private Ltd.",
    location: "Noida, India",
    buttonText: "Apply on Timesjobs",
    profileImg: "./p4.png",
    name: "Joseph Gray",
    color: "green",
  },
];

function PostSection() {
  return (
    <div className={style.PostSection}>
      <NavHeader />
      <div className={style.postContainer}>
        <div className={style.posts}>
          <Posts post={postList[0]} />
          <Posts post={postList[1]} />
          <PostsAds post={PostAdsList[0]} />
          <PostsAds post={PostAdsList[1]} />
        </div>
        <div
          className={`${style.recommend} d-none d-md-block d-lg-block d-xl-block`}
        >
          <Location />
        </div>
      </div>
    </div>
  );
}

export default PostSection;
