import React, { useEffect } from 'react';
import '../css/home.css';


const Home: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('home');
    return () => {
      document.body.classList.remove('home');
    };
  }, []);
  return (
    <div>
      <h1>MentorPrise</h1>
      <p>This is the Home page.</p>
    </div>
  );
};


export default Home;
