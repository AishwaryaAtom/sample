import React from "react";
import TaskRouter from "./taskRouter";
import datas from "/datas.jpg";
import { Link } from "react-router-dom";
export default function DataScience() {
  return (
    <>
      <div className="mt-2">
        <div>
          <img src={datas} width="300" height="300" />
        </div>
        <div>
          <p>
            Data scientist is one of the best suited professions to thrive this
            century. It is digital, programming-oriented, and analytical.
            Therefore, it comes as no surprise that the demand for data
            scientists has been surging in the job marketplace.{" "}
          </p>
        </div>
        <div>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </>
  );
}
