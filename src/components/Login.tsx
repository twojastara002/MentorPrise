import React, { useState } from "react";
import { User } from '../App';
import TriggerTextBox from "./TriggerTextBox";
import Button from "./Button";
import '../css/login.css'

interface LoginItems {
    loginSuccess: (user: User) => void;
    setIsLoggedIn?: (loggedIn: boolean) => void;
    onLogin?: () => void;
    onRegister?: () => void;
}


const Login: React.FC<LoginItems> = ({
    loginSuccess,
    setIsLoggedIn,
    onLogin,
    onRegister,
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleLoginClick = () => {
        
    };

    const handleRegisterClick = () => {
        onRegister && onRegister();
    };

    return (
        <div className="login-container">
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
            {errorMessage && <div className="error">{errorMessage}</div>}
            <Button label="Login" onClick={handleLoginClick} />
            <Button label = "Register" onClick={handleRegisterClick} />
        </div>
    );
};

export default Login;