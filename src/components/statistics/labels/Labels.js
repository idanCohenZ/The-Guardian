import React from "react";
import "./Labels.css";

function Labels({ labels }) {
  return (
    <>
      <img
        className="backgroung-labels-image"
        src="/images/background-labels.png"
        alt="backgroung lables page"
      />

      <h1 className="label-header">Labels:</h1>
      <div className="labels-cards">
        <div className="labels-container">
          <div className="row labels-wrapper">
            {labels.map((labelobj, index) => (
              <Card label={labelobj} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ label }) {
  return (
    <div className="col-lg-2">
      <div className="our-team-main">
        <div className="team-front">
          <h3>{label.string}</h3>
        </div>

        <div className="team-back">
          <span>Frequency: {label.frequency}</span>
        </div>
      </div>
    </div>
  );
}

export default Labels;
