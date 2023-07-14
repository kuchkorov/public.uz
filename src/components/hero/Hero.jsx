import React from 'react'
import './hero.css'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='header-hero'>
        <div className="software-innovation-hero-wrapper section-space--pt_80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="software-innovation-hero-wrap wow move-up">
                                <div className="software-innovation-hero-text">
                                    <p className="sub-heading">Maqolangizni tayyormi?</p>
                                    <h3>Siz uchun eng yaxshi tanlov</h3>
                                    <h1 className="font-weight--reguler mb-30">uznauka.uz </h1>
                                    <h6 className="info-heading">Turli xil konferensiya maqolalar chop etish va ularga xizmat ko'rsatish bo'yicha xizmatlarning to'liq to'plami. <br /> </h6>
                                    <div className="hero-button  mt-30">
                                        <Link to="/about" className="ht-btn ht-btn-md">Batafsil</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="software-innovation-hero-image animation_images three mt-30">
                                <img src="https://htmldemo.net/mitech/assets/images/hero/soft-01.webp" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Hero