import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignUp} />

      </div>
    </Router>
  );
}

export default App;
