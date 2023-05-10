import React from "react";

export default function Modal(props) {
  return (
    <div className="modal d-flex justify-content-center align-items-center">
      <div className="content">
        <p className="h4 mt-5 mb-3">{props.message}</p>
        <button
          className="btn btn-outline-primary  mt-3 mb-4"
          onClick={props.closing}
        >
          Close
        </button>
      </div>
    </div>
  );
}
