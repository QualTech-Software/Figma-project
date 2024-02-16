import React, { useState } from "react";
import rec90 from "../assets/Rectangle 90.svg";
import TechnologyCard from "../Card/TechnologyCard";
import {
  python,
  angular,
  php,
  java,
  android,
  flutter,
  Reacts,
  adobe,
  uiux,
  figma,
} from "../assets";
import "../Styles/Technology.css";

const Technology = () => {
  const [startIndex, setStartIndex] = useState(0);

  const technologies = [
    { name: "Python", image: python },
    { name: "Angular", image: angular },
    { name: "Php", image: php },
    { name: "Java", image: java },
    { name: "Android", image: android },
    { name: "Flutter", image: flutter },
    { name: "Angular", image: angular },
    { name: "UI/UX", image: uiux },
    { name: "Figma", image: figma },
    { name: "Adobe Xd", image: adobe },
    { name: "Flutter", image: flutter },
    { name: "React", image: Reacts },
  ];

  const handleClickNext = () => {
    const nextStartIndex = startIndex + 6;
    if (nextStartIndex < technologies.length) {
      setStartIndex(nextStartIndex);
    }
  };

  const handleClickPrevious = () => {
    const previousStartIndex = startIndex - 6;
    if (previousStartIndex >= 0) {
      setStartIndex(previousStartIndex);
    }
  };

  return (
    <>
      <div className="techno">
        {/* <img src={rec90} className="hori" alt="Rectangle 90" /> */}
        <h2>We use Technologies</h2>
        <div className=" rows">
          {technologies.slice(startIndex, startIndex + 6).map((tech, index) => (
            <TechnologyCard
              key={startIndex + index}
              name={tech.name}
              image={tech.image}
            />
          ))}
        </div>
        <div className="navigation-buttonz">
          {startIndex > 0 && (
            <div className="prev">
              <button onClick={handleClickPrevious}>&lt;</button>
            </div>
          )}
          {startIndex + 6 < technologies.length && (
            <button onClick={handleClickNext}>&gt;</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Technology;
