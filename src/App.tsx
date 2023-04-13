import Button from "./components/Button";
import TriggerTextBox from "./components/TriggerTextBox";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Match from "./components/Match";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import "./css/pages.css";
import TestHTTP from "./components/TestHTTP";
import Preference from "./components/Preference";
import MatchMain from './components/MatchMain';
import AutoMatch from "./components/AutoMatch";

//THIS PORT HAS TO MATCH THE SAME PORT THE SERVER IS LISTENING TO
const globalServerPort = 3000;

export interface User {
  name: string;
  email: string;
  type: string;
  password: string;
}

export interface PreferenceFile {
  userEmail: string;
  branch: string;
  yearsExp: number;
  department: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);


  const handleLoginClick = () => {
    setCurrentPage("Login/Register");
  };

  const handleLoginSuccess = (user: User) => {
    setUser(user);
    setIsLoggedIn(true);
    setCurrentPage("Profile");
  };

  const handleLogoutClick = () => {
    setUser(null);
    setIsLoggedIn(false);
    setCurrentPage("Home");
  };

  const handleClick = () => {
    setCurrentPage("MatchMain");
  };

  const handleRemoveUserMatches = () => {
    if (user) {
      let xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        "http://localhost:" + globalServerPort + "/match/remove/" + user.email
      );
      xhr.onload = () => {
        alert("All your matches removed.");
      };
      xhr.send();
    }
  };


  const pageNavigation = (webpage: string) => {
    setCurrentPage(webpage);
  };

  function handleAddedPreference(pref: PreferenceFile): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="App">
      <NavigationBar
        currentPage={currentPage}
        onLoginClick={handleLoginClick}
        isLoggedIn={isLoggedIn}
        onLogoutClick={handleLogoutClick}
        pageNavigation={pageNavigation}
        user={user}
      />

      {currentPage === 'MatchMain' &&
        <MatchMain isLoggedIn={isLoggedIn}
          handleWebpageChange={pageNavigation} />}
      <div className="page-container">
        {currentPage === "AutoMatch" &&
          <AutoMatch currentUser={user} serverPort={globalServerPort} />}
        {currentPage === "Home" && <Home handleClick={handleClick} />}
        {currentPage === "Match" && <Match />}
        {currentPage === "Login/Register" && (
          <Login
            loginSuccess={handleLoginSuccess}
            serverPort={globalServerPort}
          />
        )}

        {currentPage === "UserProfile" && user && (
          <UserProfile
            email={user.email}
            name={user.name}
            serverPort={globalServerPort}
            onDeleteMatches={handleRemoveUserMatches}
          />
        )}
        {currentPage === "AddPreference" && user && (
          <Preference
            serverPort={globalServerPort}
            currentUser={user}
            addedPreferenceSuccess={handleAddedPreference}
          />
        )}
      </div>
    </div>
  );
};

export default App;