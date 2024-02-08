import React from "react";
import RectangleImage from "./RectangleImage"; // Assuming RectangleImage is a component you'll create to render the images
import { Rectangle1, Rectangle2 } from "../assets";

const Learn = () => {
  // Array containing image data
  const imageData = [
    {
      src: Rectangle1,
      className: "rectangle",
      alt: "Rectangle 1",
    },
    {
      src: Rectangle2,
      className: "rectangles", // Add an additional class for Rectangle2
      alt: "Rectangle 2",
    },
  ];

  // Content for the title and text
  const title = "Growing Businesses through Digital Transformation";
  const text =
    "QualTech has been established with the vision of providing a software platform to the business, societal sections lacking the benefits of technology. We are a trusted partner in digital engineering and enterprise modernization, and our services provide distinct competitive advantage to our customers.";

  // Content for the additional section
  const additionalTitle = "We Build New Future With Best Technology";
  const additionalText =
    "QualTech is a futuristic software development company. We use the strength of innovation to develop customer-centric, agile and data-driven cutting-edge software solutions for businesses all over the globe.";

  return (
    <>
      <div className="rect">
        {/* Main content */}
        <div className="rect-title">
          <h1>{title}</h1>
        </div>
        <div className="rect-text">
          <p>{text}</p>
        </div>
        <button className="learn">
          <p>Learn More</p>
        </button>
        {/* Rendering images dynamically using forEach loop */}
        {imageData.map((image, index) => (
          <RectangleImage
            key={index}
            src={image.src}
            className={image.className}
            alt={image.alt}
          />
        ))}
      </div>
      {/* Additional content */}
      <div className="additional-content">
        <div className="additional-title">
          <h1>{additionalTitle}</h1>
        </div>
        <div className="additional-text">
          <p>{additionalText}</p>
        </div>
        <button className="additional-learn">
          <p>Learn More</p>
        </button>
      </div>
    </>
  );
};

export default Learn;
