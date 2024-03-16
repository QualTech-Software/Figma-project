import React, { useState } from "react";
import { cardData } from "./About";
const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard((prevSelectedCard) =>
      prevSelectedCard === index ? null : index
    );
  };

 

  return (
    <>
      <div className="grid-container">
        <div className="slide-content">
          <div className="card-wrapper">
            <h1>What Clients Say About Us</h1>
            <br />
            <ul>
              {cardData.map((card, index) => (
                <li
                  key={index}
                  className={`card ${selectedCard === index ? "selected" : ""}`}
                  onClick={() => handleCardClick(index)}
                >
                  <div className="card-image">
                    <img
                      src={card.image}
                      className="card-img"
                      alt={`Card ${index}`}
                    />
                  </div>
                  <div className="bio">
                    <h2 className="name">{card.name}</h2>
                    <p className="location">{card.location}</p>
                  </div>
                  <h4 className="decsri">{card.description}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
