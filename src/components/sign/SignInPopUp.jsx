import React from "react";
import style from "./signIn.module.css";
import facebook from "./facebook.png";
import google from "./google.png";
import { UserContext } from "../provider/UserAuthProvider";

function SignInPopUp({ setPopUpState }) {
  const context = React.useContext(UserContext);

  return (
    <div className={style.background}>
      <div className={style.foreground}>
        <div
          className={`d-none d-md-none d-lg-block d-xl-block ${style.heading}`}
        >
          <span>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
        </div>
        <div className={style.containerMain}>
          <div className={style.signUpSection}>
            <h1>Sign In</h1>
            <input className={style.input1} type="text" placeholder="Email" />
            <input
              className={style.input2}
              type="password"
              placeholder="Password"
            />
            <button
              className={style.signInButton}
              onClick={() => {
                context.setLogin(true);
                setPopUpState(false);
              }}
            >
              <span>Sign In</span>
            </button>
            <SignInOptions
              icon={facebook}
              text={"Sign In With Facebook"}
              onClick={() => {
                context.setLogin(true);
                setPopUpState(false);
              }}
            />
            <SignInOptions
              icon={google}
              text={"Sign up with Google"}
              onClick={() => {
                context.setLogin(true);
                setPopUpState(false);
              }}
            />
            <span className={style.forgetpass}>Forgot Password?</span>
          </div>
          <div
            className={`d-none d-md-none d-lg-block d-xl-block ${style.imgSection}`}
          >
            <img
              className={style.imgBackground}
              src={require("./signInImg.png")}
              alt="background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SignInOptions = ({ icon, text, onClick }) => {
  return (
    <button className={style.signInOption} onClick={onClick}>
      <img src={icon} alt="hello" />
      <p>{text}</p>
    </button>
  );
};

export default SignInPopUp;
