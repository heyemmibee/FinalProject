import React from "react";
import "./chatTestPage.css";
import ChatApp from "../../components/ChatApp";

function ChatTestPage() {
  // TODO : Grab username from express session here.
  let username = "Q";
  console.log("username : " + username);


  return (
    <div>
      <ChatApp username={username} />
    </div>
  );
}

export default ChatTestPage;
