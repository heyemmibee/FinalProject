import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dasboard from "./pages/Dashboard";
import ChatTestPage1 from "./pages/ChatTestPage1";
import ChatTestPage2 from "./pages/ChatTestPage2";
import ChatTestPage3 from "./pages/ChatTestPage3";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/dashboard" component={Dasboard} />
        <Route exact path="/chat1" component={ChatTestPage1} />
        <Route exact path="/chat2" component={ChatTestPage2} />
        <Route exact path="/chat3" component={ChatTestPage3} />
      </div>
    </Router>
  );
}

export default App;
