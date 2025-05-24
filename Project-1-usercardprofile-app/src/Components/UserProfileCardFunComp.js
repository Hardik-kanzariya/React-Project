import React from "react";

const UserProfileCardFunComp = ({ image, name, skill, experience, email, Location, Phone }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h1>{name}</h1>

      <div className="title">
        <p><strong>Skill:</strong></p> <span>{skill}</span>
      </div>
      <div className="title">
        <p><strong>Experience:</strong></p> <span>{experience}</span>
      </div>
      <div className="title">
        <p><strong>Email:</strong></p> <span>{email}</span>
      </div>
      <div className="title">
        <p><strong>Location:</strong></p> <span>{Location}</span>
      </div>
      <div className="title">
        <p><strong>Phone:</strong></p> <span>{Phone}</span>
      </div>
      <button>Contact Us</button>
    </div>
  );
};

export default UserProfileCardFunComp;
