import React, { useState } from 'react';
import '../css/navigationBar.css'
import Match from './Match';
import Home from './Home';
import Login from './Login';
import { User } from '../App';


interface NavigationBarItems {
    currentPage: string;
    onLoginClick: () => void;
    isLoggedIn: boolean;
    onLogoutClick: () => void;
    pageNavigation: (webpage: string) => void;
    user: User | null;
}

const NavigationBar: React.FC<NavigationBarItems> = ({
    currentPage,
    onLoginClick,
    isLoggedIn,
    onLogoutClick,
    pageNavigation,
    user,

}) => {

    const handleWebpageChange = (newWebpage: string) => {
        pageNavigation(newWebpage);
    };

    return (
        <div>
            <nav className='NavigationBar'>
                <ul>
                    <li>
                        <a
                            className={currentPage === 'Home' ? 'active' : ''}
                            href='#'
                            onClick={() => handleWebpageChange('Home')}
                        >
                            MENTORPRISE
                        </a>
                    </li>
                    <li>
                        <a
                            className={currentPage === 'Match' ? 'active' : ''}
                            href='/#match'
                            onClick={() => handleWebpageChange('Match')}
                        >
                            match
                        </a>
                    </li>
                    {isLoggedIn && user && (
                        <li>
                            <a
                                className={currentPage === 'UserProfile' ? 'active' : ''}
                                href='/#profile'
                                onClick={() => handleWebpageChange('UserProfile')}
                            >
                                profile
                            </a>
                        </li>
                    )}
                    <li>
                        {isLoggedIn ? (
                            <button onClick={onLogoutClick}>Logout</button>
                        ) : (
                            <a
                                className={currentPage === 'LoginRegister' ? 'active' : ''}
                                href='/#login_register'
                                onClick={onLoginClick}
                            >
                                login/register
                            </a>
                        )}
                    </li>
                </ul>
            </nav>

        </div >
    );

};

export default NavigationBar;
