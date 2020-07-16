import React from "react";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
  // navbar and pacman loader
  return (
    <div className="container-fluid">
      <NavBar path="/trending" />
      <div className="container">
        <div className="container text-center">
          <div className="loadingio-spinner-bean-eater-v1vqu4a453">
            <div className="ldio-860tjvzi4o">
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <p className="display-4 text-center" style={{ color: "white" }}>
          Page under construction
        </p>
      </div>
    </div>
  );
};
