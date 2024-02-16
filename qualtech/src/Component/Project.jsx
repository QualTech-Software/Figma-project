import React from "react";
import rectangle from "../assets/Rectangle 19.svg";
import "../Styles/Project.css";
import arrow from "../assets/arr3.svg";
import ProjectCard from "../Card/ProjectCard";
import PrjData from "../Data/Prjdata.json";
import { rec17, rec18, rec16 } from "../assets";

const projectImages = [rec17, rec18, rec16];

const Project = () => {
  return (
    <>
      <div className="prjcontainer">
        <img src={rectangle} className="area" alt="Rectangle Image" />
        <div className="prjheading">
          <h1>Check out our latest projects</h1>
        </div>

        <div className="cards">
          <div className="row">
            {PrjData.map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={projectImages[index]}
                title={project.title}
                message={project.message}
                textClass={project.textClass}
                msgClass={project.msgClass}
              />
            ))}
          </div>
          <div className="disbtn">
            <button>
              <p>Discover More</p>
              <img src={arrow} className="arr2" alt="Arrow Image" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
