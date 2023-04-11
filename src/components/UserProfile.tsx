import React from "react";

interface UserProfileProps {
    email: string;
    name: string;
    onLogout: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, name, onLogout }) => {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
};

export default UserProfile;
