import React from "react";
import style from "./signIn.module.css";

function SignInPopUp() {
  return (
    <div className={style.background}>
      <div className={style.foreground}>
        <div className={style.heading}>
          <span>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignInPopUp;
