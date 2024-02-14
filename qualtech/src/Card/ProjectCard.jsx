import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  imageSrc,
  title,
  message,
  textClass,
  msgClass,
  ...rest
}) => (
  <div className="col card" {...rest}>
    <img src={imageSrc} className="first" />
    <div className={textClass}>
      <p>{title}</p>

      <div className={msgClass}>
        <p>{message}</p>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
