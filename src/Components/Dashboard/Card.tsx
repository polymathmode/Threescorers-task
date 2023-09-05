import React from 'react';
import './Card.css'; // Create a CSS file for styling

const Card = ({ totalUsers }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="left">
          <p>Total number of users</p>
          <h2>{totalUsers}</h2>
        </div>
        <div className="right">
          <img
            src="https://example.com/people-icon.png" // Replace with your people icon URL
            alt="People Icon"
            width="48"
            height="48"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
