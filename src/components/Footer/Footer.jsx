import React from "react";
import style from "./Footer.module.css";
export default function Footer() {
  return (
    <>
  <section className="Footer">
  <div
        className={`container-fluid ${style.upperFooter} py-5 text-light text-center`}
      >
        <div className="row py-4 d-flex justify-content-around align-content-center">
          <div className="col-md-3">
            <div className="">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h2>AROUND THE WEB</h2>

              <ul
                className={`list-unstyled d-flex align-items-center justify-content-center gap-3 ${style.icons}`}
              >
                <li>
                  <i className="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i className="fa-brands fa-twitter"></i>
                </li>
                <li>
                  <i className="fa-brands fa-linkedin"></i>
                </li>
                <li>
                <i className="fa-solid fa-globe"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="">
              <h2>ABOUT FREELANCER</h2>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid ${style.lowerFooter} py-3 text-light text-center`}
      >
        <p>Copyright © Your Website 2021</p>
      </div>
  </section>
    </>
  );
}
