import { useState } from "react"
import img1 from "../../assets/portfolio/port1.png"
import img2 from "../../assets/portfolio/port2.png"
import img3 from "../../assets/portfolio/port3.png"
import PortfolioCard from "../PortfolioCard/PortfolioCard";


export default function Portfolio() {
  let [imgSrc,setImgSrc] =useState();
                 
  function changeImgSrc(x){
    setImgSrc(x)
    
  }

  
  let imgs = [
    {id:"img1" ,src:img1},
    {id:"img2" ,src:img2},
    {id:"img3" ,src:img3},
    {id:"img4" ,src:img1},
    {id:"img5" ,src:img2},
    {id:"img6" ,src:img3}
]
  return (<>
    <div className='text-dark-blue py-5 '>
      <h1 className='text-uppercase fw-bold text-center pt-5'>portfolio component</h1>
      <div className='d-flex justify-content-center align-items-center my-3'>
      <div className="line lineDark me-2"></div>
      <i className="fa-solid fa-star text-dark-blue"></i>
      <div className="line lineDark ms-2"></div>
    </div>
    <div className="container">
    <div className="row g-4">
      {imgs.map((img)=><PortfolioCard key={img.id} img={img} changeImgSrc={changeImgSrc}  />)}
    </div>
    </div>
 
    
    {imgSrc? <div onClick={()=>changeImgSrc()} className="bg-blue-trans position-fixed top-0 bottom-0 start-0 end-0 bg-light-blue d-flex justify-content-center align-items-center z-3 ">
    <div className='w-50'>
      <img src={imgSrc} alt="" className='w-100 rounded-1' />
      </div>
    </div>:null } 
    </div>
  </>
  )
}
