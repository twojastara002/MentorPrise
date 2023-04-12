import "../css/profile.css";
import React from "react";
import Button from "./Button";

interface UserProfileProps {
  email: string;
  name: string;
  onDeleteMatches: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  email,
  name,
  onDeleteMatches,
}) => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Button onClick={onDeleteMatches} label="Remove all your matches" />
    </div>
  );
};

export default UserProfile;
