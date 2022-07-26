import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/header/Header";
import Wallpaper from "./components/middle/Wallpaper";
import PostSection from "./components/postSection/PostSection";
import { UserAuthProvider } from "./components/provider/UserAuthProvider";
import SignInPopUp from "./components/sign/SignInPopUp";

function App() {
  return (
    <div className="App">
      <UserAuthProvider>
        <SignInPopUp />
        <Header />
        <Wallpaper />
        <PostSection />
      </UserAuthProvider>
    </div>
  );
}

export default App;
