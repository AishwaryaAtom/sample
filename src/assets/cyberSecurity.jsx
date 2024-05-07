import React from "react";
import TaskRouter from "./taskRouter";
import cyber from "/cyber.webp";
import { Link } from "react-router-dom";
export default function CyberSecurity() {
  return (
    <>
      <div className="mt-2">
        {" "}
        <div>
          <img src={cyber} width="300" height="300" />
        </div>
        <div>
          <p>
            Cybersecurity is the practice of protecting internet-connected
            systems such as hardware, software and data from cyberthreats. It's
            used by individuals and enterprises to protect against unauthorized
            access to data centers and other computerized systems.
          </p>
        </div>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </>
  );
}
