import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Wallpaper from "./components/middle/Wallpaper";
import PostSection from "./components/postSection/PostSection";
import { UserAuthProvider } from "./components/provider/UserAuthProvider";
import SignInPopUp from "./components/sign/SignInPopUp";

function App() {
  const [popUpOpen, setPopUpState] = useState(false);
  return (
    <div className="App">
      <UserAuthProvider>
        {popUpOpen && <SignInPopUp setPopUpState={setPopUpState} />}
        <Header setPopUpState={setPopUpState} />
        <Wallpaper />
        <PostSection />
      </UserAuthProvider>
    </div>
  );
}

export default App;
