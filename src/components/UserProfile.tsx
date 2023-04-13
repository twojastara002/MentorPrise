import "../css/profile.css";
import React, { useState } from "react";
import Button from "./Button";

interface UserProfileProps {
  email: string;
  name: string;
  serverPort: number;
  onDeleteMatches: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  email,
  name,
  serverPort,
  onDeleteMatches,
}) => {
  const [displayMatches, setDisplayMatches] = useState([""]);

  //pure spaghetti
  function handleLoadMatches() {
    let xhr = new XMLHttpRequest();
    let matchArray = [];
    let tmpArray = [""];
    xhr.onload = () => {
      if (xhr.responseText == "no matches found" || xhr.responseText == "") {
        tmpArray[0] = "no matches found";
        setDisplayMatches(tmpArray);
      } else {
        matchArray = xhr.responseText.split(";");
        matchArray.forEach((match) => {
          if (email != match.split(",")[1]) {
            tmpArray.push("Matched with user: " + match.split(",")[1]);
          } else {
            tmpArray.push("Matched with user: " + match.split(",")[2]);
          }
          setDisplayMatches(tmpArray);
        });
      }
    };
    xhr.open("GET", "http://localhost:" + serverPort + "/match/read/" + email);
    xhr.send();
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Button onClick={onDeleteMatches} label="Remove all your matches" />
      <Button onClick={handleLoadMatches} label="Load Matches" />
      {displayMatches.map((row) => (
        <p>{row}</p>
      ))}
    </div>
  );
};

export default UserProfile;
