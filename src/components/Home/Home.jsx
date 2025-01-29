import React from 'react'
import style from './Home.module.css'
import logo from "../../assets/avataaars.svg"
import StarLine from '../StarLine/StarLine'

export default function Home() {
  return (
    <>
     <div className={`d-flex flex-column justify-content-center align-items-center  text-white text-center bgGreen min-vh-100 w-100`} >
    <div className="img w-25 ">
      <img src={logo} alt="Logo" className="w-75 my-5" />
    </div>
    <StarLine/>
    <h2 className=" fw-bold fs-1">Start Framework</h2>
    <p  className="fs-5"> Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
