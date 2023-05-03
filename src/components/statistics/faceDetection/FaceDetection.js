import React from "react";
import "./FaceDetection.css";

function FaceDetection(props) {
  const user_face = props.faces[0];
  const relatives = props.faces.slice(1, props.faces.length);
  return (
    <>
      <img
        className="backgroung-face-image"
        src="./images/backgroud-face.jpg"
        alt="backgroung face page"
      />
      <div className="face-cards">
        <div className="face-detection-container">
          <div className="face-wrapper">
            <ul className="user-table">
              {user_face && (
                <FaceItem
                  key={user_face.id}
                  name_of_class="user-face"
                  image={user_face.image}
                  message="is that you?"
                />
              )}
            </ul>
            <ul className="relatives-table">
              {relatives.map((relative) => {
                let message;
                if (relative.freq === 1) {
                  message = "This realtive appears only once";
                } else {
                  message = "This realtive appear " + relative.freq + " times";
                }
                return (
                  <FaceItem
                    key={relative.id}
                    name_of_class="relative-face"
                    image={relative.image}
                    message={message}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function FaceItem(props) {
  return (
    <li className={`single-face-container ${props.name_of_class}`}>
      <img className="face-image" src={props.image} alt="face" />
      <p className="face-text">{props.message}</p>
    </li>
  );
}

export default FaceDetection;
