import React from 'react'
import './scrolltop.css'
function ScrollTop() {
  return (
    <div className='main-scroll'>
        <a href="#" className="scroll-top show" id="scroll-top">
            <i className="arrow-top fas fa-chevron-up"></i>
            <i className="arrow-bottom fas fa-chevron-up"></i>
        </a>
    </div>
  )
}

export default ScrollTop