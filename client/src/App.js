import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
      </div>
    </Router>
  );
}

export default App;
