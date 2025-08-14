import React from 'react';
import '../assets/css/loader.css';
import logo from '../assets/image/fab_logos.png';

const LLoadingAnimation = () => {
  return (
    <div className="fab-loader">
      <div className="fab-loader__container">
        <div className="fab-loader__spinner">
          <div className="fab-loader__ring fab-loader__ring--1"></div>
          <div className="fab-loader__ring fab-loader__ring--2"></div>
          <div className="fab-loader__ring fab-loader__ring--3"></div>
          <div className="fab-loader__ring fab-loader__ring--4"></div>
          <div className="fab-loader__ring fab-loader__ring--5"></div>
          
          <div className="fab-loader__logo-container">
            <img src={logo} alt="FabTech Logo" className="fab-loader__logo" />
          </div>
        </div>
      </div>
      <div className="fab-loader__text">
        <span className="fab-loader__letter">L</span>
        <span className="fab-loader__letter">O</span>
        <span className="fab-loader__letter">A</span>
        <span className="fab-loader__letter">D</span>
        <span className="fab-loader__letter">I</span>
        <span className="fab-loader__letter">N</span>
        <span className="fab-loader__letter">G</span>
      </div>
    </div>
  );
};

export default LLoadingAnimation;