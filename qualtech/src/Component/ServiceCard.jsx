import React from "react";

function ServiceCard({ title, description, svgImages }) {
  return (
    <div className="cardo">
      <div className="svg-container">
        {svgImages.map((image, index) => (
          <React.Fragment key={index}>
            <img src={image.src} alt={image.alt} className={image.className} />
            <p className={`svg-label ${image.labelClass}`}>{image.label}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="card-data">
        <div className="title">{title}</div>
        <div className="text">{description}</div>
        <div className="btn">
          <p>Explore</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
