import React, { useEffect, useState } from "react";
import { User } from "../App";
import { PreferenceFile } from "../App";
import TriggerTextBox from "./TriggerTextBox";
import Button from "./Button";
import "../css/login.css";
import Registration from "./RegistrationForm";
import '../css/preferences.css';

interface PreferenceItems {
    serverPort: number;
    currentUser: User;
    addedPreferenceSuccess: (pref: PreferenceFile) => void;
    onAddedPreference?: () => void;
}

const Preference: React.FC<PreferenceItems> = ({
    serverPort,
    currentUser,
    addedPreferenceSuccess,
    onAddedPreference,
}) => {
    const [branch, setBranch] = useState("");
    const [department, setDepartment] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [preferenceDisplay, setPreferenceDisplay] = useState([""]);

    function handleCurrentPreferenceChange() {
        let xhr = new XMLHttpRequest();
        let preferenceArray = [];
        let tmpArray = [""];
        xhr.onload = () => {
            if (
                "No preference found for the user: " + currentUser.email ==
                xhr.responseText
            ) {
                tmpArray[0] = "No preference found for the user: " + currentUser.email;
                setPreferenceDisplay([...tmpArray]);
            } else {
                preferenceArray = xhr.responseText.split(",");
                tmpArray[0] = "Email: " + preferenceArray[0];
                tmpArray[1] = "Branch: " + preferenceArray[1];
                tmpArray[2] = "Your years of experience: " + preferenceArray[2];
                tmpArray[3] = "Department: " + preferenceArray[3];
                setPreferenceDisplay([...tmpArray]);
            }
        };
        xhr.open(
            "GET",
            "http://localhost:" + serverPort + "/preference/read/" + currentUser.email
        );
        xhr.send();
    }

    const handleBranchChange = (value: string) => {
        setBranch(value);
    };

    const handleDepartmentChange = (value: string) => {
        setDepartment(value);
    };

    const handleAddPreferenceClick = () => {
        var xhr = new XMLHttpRequest();
        let userExp = "";

        xhr.onload = () => {
            userExp = xhr.responseText.split(",")[4]; //find the user's years of experience
        };
        xhr.open(
            "GET",
            "http://localhost:" + serverPort + "/login/" + currentUser.email,
            false
        );
        xhr.send();
        //send ittttt

        xhr.onload = () => {
            if (xhr.status == 404) console.log("Preferences failed to updated.");
            else console.log("Preferences successfully updated.");
            handleCurrentPreferenceChange();
            setDepartment("");
            setBranch("");
        };
        xhr.open(
            "GET",
            "http://localhost:" +
            serverPort +
            "/preference/add/" +
            currentUser.email +
            "-" +
            branch +
            "-" +
            userExp +
            "-" +
            department,
            false
        );
        xhr.send(); //send it
    };

    const handleRemovePreferenceClick = () => {
        var xhr = new XMLHttpRequest();

        xhr.onload = () => {
            handleCurrentPreferenceChange();
            setDepartment("");
            setBranch("");
        };

        xhr.open(
            "GET",
            "http://localhost:" +
            serverPort +
            "/preference/remove/" +
            currentUser.email,
            false
        );

        //send ittttt
        console.log("on remove");
        xhr.send();
    };

    return (
        <>
            <div className="login-container">
                <>
                    <TriggerTextBox
                        label="Branch"
                        value={branch}
                        onChange={handleBranchChange}
                    />
                    <TriggerTextBox
                        label="Department"
                        value={department}
                        onChange={handleDepartmentChange}
                    />
                    {errorMessage && <div className="error">{errorMessage}</div>}
                    <Button label="Update" onClick={handleAddPreferenceClick} />
                    <Button label="Remove" onClick={handleRemovePreferenceClick} />
                </>
            </div>
            <div className="preference-showcase">
                <Button
                    label="Load Preferences"
                    onClick={handleCurrentPreferenceChange}
                />
                <div className="preference-display">
                    {preferenceDisplay.map((row, index) => (
                        <p key={index} className="loaded-preference">{row}</p>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Preference;