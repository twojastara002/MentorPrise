
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
            <Col>Name: {name}</Col>
            <Col>Email: {email}</Col>
            <Col>Departmart: {mentors.department}</Col>
            <Col>Years of Experience: {mentors.YearsOfExperience}</Col>
        </div>
    );
};

export default UserProfile;
