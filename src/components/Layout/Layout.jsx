import React from "react";
import style from "./Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="min-vh-100 pt-5 d-flex justify-content-center align-items-center"><Outlet /></div>
        <Footer />
      </div>
    </>
  );
}