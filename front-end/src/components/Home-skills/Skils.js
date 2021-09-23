import React from "react";
import "./skils.css";
const Skils = () => {
  return (
    <div className="skils-container">
      <div className="web-skils">
        <h1 className="title">Web Development</h1>

        <p>HTML,CSS</p>
        <div className="container">
          <div className="skills html">90%</div>
        </div>

        <p>JavaScript</p>
        <div className="container">
          <div className="skills js">65%</div>
        </div>

        <p>React.js</p>
        <div className="container">
          <div className="skills react">60%</div>
        </div>
        <p>Node.js</p>
        <div className="container">
          <div className="skills node">60%</div>
        </div>
      </div>
      <div className="data-skils">
        <h1 className="title">Data Science</h1>
        <p>Machine Learning</p>
        <div className="container">
          <div className="skills ml">90%</div>
        </div>

        <p>Data Analyst</p>
        <div className="container">
          <div className="skills da">80%</div>
        </div>

        <p>Python</p>
        <div className="container">
          <div className="skills py">65%</div>
        </div>

        <p>SQL</p>
        <div className="container">
          <div className="skills sql">60%</div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
