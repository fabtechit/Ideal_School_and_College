import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/error.css';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-404">
        <div className="error-404__universe">
          <div className="error-404__stars"></div>
          <div className="error-404__stars error-404__stars--2"></div>
          <div className="error-404__stars error-404__stars--3"></div>
          
          <div className="error-404__planet"></div>
          <div className="error-404__astronaut">
            <div className="error-404__astronaut-helmet"></div>
            <div className="error-404__astronaut-body"></div>
          </div>
          
          <div className="error-404__content">
            <h1 className="error-404__title">404</h1>
            <h2 className="error-404__subtitle">Lost in Space</h2>
            <p className="error-404__message">
              The page you're looking for has drifted into the unknown.
            </p>
            <button 
              className="error-404__button"
              onClick={() => navigate('/')}
            >
              Return to Earth
            </button>
          </div>
          
          <div className="error-404__satellite">
            <div className="error-404__satellite-body"></div>
            <div className="error-404__satellite-panel error-404__satellite-panel--1"></div>
            <div className="error-404__satellite-panel error-404__satellite-panel--2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;