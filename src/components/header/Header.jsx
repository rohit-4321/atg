import React, { useContext } from "react";
import logo from "./whole.png";
import style from "./header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Profile } from "./loginprofile/Profile";
import { UserContext } from "../provider/UserAuthProvider";

function Header() {
  const context = React.useContext(UserContext);

  return (
    <div className="d-none d-lg-block d-xl-block">
      <div className={`d-flex justify-content-between  ${style.container}`}>
        <div className="d-flex align-items-center justify-content-center">
          <img
            src={logo}
            alt="img"
            className={`${style.logo}  align-middle no-margin `}
          />
        </div>
        <SearchBar />
        <div className="d-flex align-items-center justify-content-center">
          {!context.islogedIn ? (
            <p
              className={style.accText}
              onClick={() => {
                context.setLogin(true);
              }}
            >
              Create account. <span>It's free</span>
            </p>
          ) : (
            <Profile />
          )}
        </div>
      </div>
    </div>
  );
}
const SearchBar = () => {
  return (
    <div className={style.searchContainer}>
      <AiOutlineSearch className={style.searchIcon} />
      <p className={style.text}>Search for your favorite groups in ATG</p>
    </div>
  );
};

export default Header;
