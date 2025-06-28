import React from 'react';
import '../styles/Project.css';

const Project = ({ title, description, image, contributors = [] }) => (
  <div className="project-box">
    <h4>{title}</h4>
    <p>{description}</p>
    {image && <img src={image} alt="Project" className="project-image" />}
    <div className="contributors">
      {contributors.map((contrib, idx) => (
        <img key={idx} src={contrib} alt="Contributor" className="contrib-img" />
      ))}
    </div>
  </div>
);

export default Project;
