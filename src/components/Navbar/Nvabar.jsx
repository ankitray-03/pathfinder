import React, { useState } from "react";
import "./Navbar.css";
import { useParams } from "../../context/context";
import { FaLocationDot } from "react-icons/fa6";
import { LuGoal } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";

import { Tooltip } from "react-tooltip";

export default function Navbar() {
  // const [algo,setalgo] = useState('')
  const { mode, setMode, algo, setAlgo, setRes, setRun } = useParams();

  return (
    <div className="navbar">
      <div className="container">
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "setstart" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "setstart") setMode(null);
            else {
              setMode("setstart");
            }
          }}
          data-tooltip-id="start-tooltip"
          data-tooltip-content="start"
          data-tooltip-place="top"
        >
          <FaLocationDot />
        </button>
        <Tooltip id="start-tooltip" />
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "settarget" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "settarget") setMode(null);
            else {
              setMode("settarget");
            }
          }}
          data-tooltip-id="end-tooltip"
          data-tooltip-content="End"
          data-tooltip-place="top"
        >
          <LuGoal />
        </button>
        <Tooltip id="end-tooltip" />
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "addbricks" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addbricks") setMode(null);
            else {
              setMode("addbricks");
            }
          }}
          data-tooltip-id="wall-tooltip"
          data-tooltip-content="Add Wall"
          data-tooltip-place="top"
        >
          <i className="bi bi-bricks"></i>
        </button>
        <Tooltip id="wall-tooltip" />
        <button
          type="button"
          className={[
            "btn",
            "btn-primary",
            mode == "addweight" ? "selected" : "",
          ].join(" ")}
          onClick={() => {
            if (mode == "addweight") setMode(null);
            else {
              setMode("addweight");
            }
          }}
          data-tooltip-id="weight-tooltip"
          data-tooltip-content="Add weights"
          data-tooltip-place="top"
        >
          <i className="bi bi-virus"></i>
        </button>
        <Tooltip id="weight-tooltip" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setRes((old) => {
              return !old;
            });
          }}
          data-tooltip-id="restart-tooltip"
          data-tooltip-content="Restart"
          data-tooltip-place="top"
        >
          <i className="bi bi-arrow-counterclockwise"></i>
        </button>
        <Tooltip id="restart-tooltip" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setRun((old) => {
              return !old;
            });
          }}
          data-tooltip-id="run-tooltip"
          data-tooltip-content="Run Algorithm"
          data-tooltip-place="top"
        >
          <FaCirclePlay />
        </button>
        <Tooltip id="run-tooltip" />
        <div>
          <select
            className="form-select"
            aria-label="Default select example"
            value={algo}
            onChange={(e) => {
              setAlgo(e.target.value);
            }}
          >
            <option value="">Choose your algorithm</option>

            <option value="BDS">BDS</option>
            <option value="BFS">BFS</option>
            {/* <option value="dijkstra">dijkstra</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
