import React, { useState } from "react";
import TriggerTextBox from "./TriggerTextBox";
import Button from "./Button";

interface RegistrationItems {
    onRegistrationSuccess: (name: string, email: string, password: string) => void;
}

const Registration: React.FC<RegistrationItems> = ({
    onRegistrationSuccess,
}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleNameChange = (value: string) => {
        setName(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleConfirmPasswordChange = (value: string) => {
        setConfirmPassword(value);
    };

    const handleRegisterClick = () => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }

        // Perform validation on the email and password

        // Assuming validation passes
        onRegistrationSuccess(name, email, password);
    };

    return (
        <div>
            <TriggerTextBox
                label="Name"
                value={name}
                onChange={handleNameChange}
            />
            <TriggerTextBox
                label="Email"
                value={email}
                onChange={handleEmailChange}
            />
            <TriggerTextBox
                label="Password"
                value={password}
                onChange={handlePasswordChange}
                isPassword
            />
            <TriggerTextBox
                label="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                isPassword
            />
            {errorMessage && <div className="error">{errorMessage}</div>}
            <Button label="Register" onClick={handleRegisterClick} />
        </div>
    );
};

export default Registration;


