import React, { useState } from "react";
import { User } from "../App";
import '../css/automatch.css'

interface MatchItems {
    currentUser: User | null;
    serverPort: number;
}

function AutoMatch({ currentUser, serverPort }: MatchItems) {
    const [isMatching, setIsMatching] = useState(false);
    const [matchResult, setMatchResult] = useState("");

    const handleFindMatch = () => {
        if (currentUser != null) {
            setIsMatching(true);
            const xhr = new XMLHttpRequest();
            xhr.open(
                "GET",
                "http://localhost:" +
                serverPort +
                "/automatic_match/match_for_" +
                currentUser.email,
                false
            );
            xhr.onload = () => {
                if (xhr.responseText == "No match found for you") {
                    setIsMatching(false);
                    alert(xhr.responseText);
                } else {
                    let [matchEmail, matchName] = xhr.responseText.split(",");
                    console.log(matchEmail);
                    console.log(matchName);
                    setMatchResult(matchName + ", " + matchEmail);
                    alert(
                        "Your match is " + matchName + "! Their email is " + matchEmail
                    );
                }
            };
            xhr.send();
        }
    };

    const handleMatch = () => {
        if (currentUser != null) {
            let xhr = new XMLHttpRequest();
            let matchEmail = matchResult.split(", ")[1];
            // console.log("hello");
            // console.log(currentUser.email);
            // console.log(matchEmail);
            // let requestString =
            //   "http://localhost:" +
            //   serverPort +
            //   "/match/create/" +
            //   currentUser.email +
            //   "-" +
            //   matchEmail;
            // console.log(requestString);

            xhr.open(
                "GET",
                "http://localhost:" +
                serverPort +
                "/match/create/" +
                currentUser.email +
                "-" +
                matchEmail
            );
            xhr.onload = () => {
                alert(xhr.responseText);
            };
            xhr.send();
        }
    };

    return (
        <div className="auto-match-container">
            <div className="button-container">
                <button onClick={handleFindMatch} disabled={isMatching}>
                    {isMatching ? "Matching..." : "Match me"}
                </button>
                <div>
                    {matchResult && (
                        <div className="match-popup">
                            {matchResult == "No match found for you" ? (
                                <p>{matchResult}</p>
                            ) : (
                                <div>
                                    <p>MATCH FOUND:</p>
                                    <p>{matchResult}</p>
                                    <button onClick={handleMatch}>Send match request</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AutoMatch;