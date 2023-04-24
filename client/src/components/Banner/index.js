import React from 'react'
import './index.css'
import bannerImg from "../../assets/EcoaimsBanner.png"

const Banner = () => {
  return (
    <div className='banner-pos'>
         <img src={bannerImg} alt="ecoaims_banner" className='banner'/>
    </div>
  )
}

export default Banner;