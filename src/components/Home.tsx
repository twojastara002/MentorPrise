import React, { useEffect } from 'react';
import '../css/home.css';

//handles the click for the button that takes up to the main match page
interface HomeProps {
  handleClick: () => void;
}

//makes it so that the image in assets is only shown on the home page and is removed when we leave the homepage
const Home: React.FC<HomeProps> = ({ handleClick }) => {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  const handleButtonClick = () => {
    handleClick();
  };

  //text and the title
  return (
    <div>
      <div className='home-container'>
        <h1>MENTORPRISE</h1>
        <p>Match with a mentor of your choice or let us do the work!</p>
        <div className="button-container">
          <button onClick={handleButtonClick}>START MATCHING</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
