import React from 'react'
import style from './About.module.css'
import StarLine from '../StarLine/StarLine'
export default function About() {
  return (
    <>
      <div className="bgGreen w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center  text-white text-center">
        <h1 className='text-uppercase'>About Component
        </h1>
        <StarLine/>
        <div className="container">
<div className="row">
  <div className="col-md-6">
    <div className="text-start">
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
  <div className="col-md-6">
    <div className="text-start">
      <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>
        </div>
      </div>
    </>
  )
}
