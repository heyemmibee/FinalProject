import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChatTestPage1 from "./pages/ChatTestPage1";
import ChatTestPage2 from "./pages/ChatTestPage2";
import ChatTestPage3 from "./pages/ChatTestPage3";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/chat1" component={ChatTestPage1} />
        <Route exact path="/chat2" component={ChatTestPage2} />
        <Route exact path="/chat3" component={ChatTestPage3} />
      </div>
    </Router>
  );
}

export default App;
