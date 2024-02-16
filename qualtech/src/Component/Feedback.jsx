import React, { useState, useRef } from "react";
import FeedData from "../Data/FeedData.json";
import "../Styles/Feed.css";

const Feedback = () => {
  const { cardData } = FeedData;
  const [selectedCard, setSelectedCard] = useState(0);
  const cardRefs = useRef(
    Array.from({ length: cardData.length }, () => React.createRef())
  );

  const handleSlide = (index) => {
    setSelectedCard(index);
    cardRefs.current[index].current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDotClick = (index) => {
    handleSlide(index);
  };

  const handleCardClick = (index) => {
    handleSlide(index);
  };

  const handleNext = () => {
    const nextIndex = (selectedCard + 1) % cardData.length;
    handleSlide(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (selectedCard - 1 + cardData.length) % cardData.length;
    handleSlide(prevIndex);
  };

  return (
    <div className="grid-container">
      <div className="slide-content">
        <div className="card-wrapper">
          <h1>What Clients Say About Us</h1>
          <div className="carousel">
            <ul className="cardzs">
              {cardData.map((card, index) => (
                <li
                  key={index}
                  ref={cardRefs.current[index]}
                  className={`cardds ${
                    selectedCard === index ? "selected" : ""
                  }`}
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
                  <h5 className="decsri">{card.description}</h5>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagination-dots">
            {cardData.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  selectedCard === index ? "selected-dot" : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
