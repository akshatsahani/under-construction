// src/App.js
import React from 'react';
// import Navbar from '../Components/Navbar';
import CardList from '../Components/CardList';
// import Breadcrumb from './Components/Breadcrumb';
import Jumbotron from '../Components/Jumbo';
import './App.css'; // Import global styles
// import ComingSoon from './Pages/ComingSoon';
const HomePage = () => {
  return (
    <div>
      {/* Navbar component */}

      <main className="container">

        {/* Main Heading */}
        {/*<h1 className="my-4 text-center">Welcome to Pulse Scientific</h1>*/}

        {/* CardList component */}
        <Jumbotron/>
        <h1 className="my-3 text-center">our partners</h1>
        <CardList/>
      </main>
    </div>
  );
}

export default HomePage;
