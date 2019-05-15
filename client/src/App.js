import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChatTestPage from "./pages/ChatTestPage";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/chat" component={ChatTestPage} />
      </div>
    </Router>
  );
}

export default App;
