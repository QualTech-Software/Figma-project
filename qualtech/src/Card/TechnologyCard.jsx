import React from "react";

const TechnologyCard = ({ name, image, ...rest }) => (
  <div className="cardz" {...rest}>
    <div className={name.toLowerCase()}>
      <img src={image} alt={name} />
    </div>
    <p>{name}</p>
  </div>
);

export default TechnologyCard;
