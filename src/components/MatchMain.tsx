import React from 'react';
import '../css/matchmain.css'

interface MatchMainItems {
    isLoggedIn: boolean;
    handleWebpageChange: (webpage: string) => void;
}

const MatchMain: React.FC<MatchMainItems> = ({ isLoggedIn, handleWebpageChange }) => {
    const handleAutoMatchClick = () => {
        if (isLoggedIn) {
            handleWebpageChange('AutoMatch');
        } else {
            handleWebpageChange('LoginRegister');
        }
    };

    const handleManualMatchClick = () => {
        if (isLoggedIn) {
            handleWebpageChange('Match');
        } else {
            handleWebpageChange('LoginRegister');
        }
    };

    return (
        <div>
            <div className='main-match-container'>
                <h2>FDM MENTOR MATCHING</h2>
                <p>We understand that it is not always easy in the workplace</p>
                <div>
                    <div className="button-container">
                        <button onClick={handleAutoMatchClick}>Auto Match</button>
                        <button onClick={handleManualMatchClick}>Manual Match</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchMain;
