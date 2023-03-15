import React from 'react'
import "../css/App.css";
import banner from "../assets/banner.png"

const Header = () => {
  return (
    <div>
         <img src={banner} alt="ecoaims_banner" className='banner'/>
    </div>
  )
}

export default Header;