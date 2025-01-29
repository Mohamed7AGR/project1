import React from "react";
import style from "./NotFound.module.css";
export default function NotFound() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100 bg-danger text-light">
        <h1>
          <i className="fa-solid fa-ban me-3"></i>404
        </h1>
        <h1>Error Page Not Found</h1>
      </div>
    </>
  );
}
