import React from 'react'

import {BiMapAlt, BiPhoneIncoming, BiMailSend, BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

import logo from '../../assets/img/logo/pubic2.png'

function Footer() {
  return (
    <>
        <div className="footer-area-wrapper  bg-dark">
            <div className="footer-area section-space--ptb_80">
                <div className="container">
                    <div className="row footer-widget-wrapper">
                        <div className="col-lg-4 col-md-6 col-sm-6 footer-widget">
                            <div className="footer-widget__logo mb-30">
                                <img src={logo} width="200" height="48" className="img-fluid" alt="" />
                            </div>
                            <ul className="footer-widget__list text-white">
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et minima quas nisi earum. Est sed eveniet dolore repellendus qui.</p>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Bizning manzil</h6>
                            <ul className="footer-widget__list">
                                <li><a href="#" className="hover-style-link text-white"><BiMapAlt style={{fontSize: "30px", marginRight: "8px", color: "#fff"}}  />O'zbekiston, Toshkent, pochta qutisi 4464, 100000</a></li>
                                <li><a href="tel:123344556" className="hover-style-link text-white"><BiPhoneIncoming style={{fontSize: "30px", marginRight: "8px", color: "#fff"}} />(+998) 99-123-45-67</a></li>
                                <li><a href="mailto:contact@aeroland.com" className="hover-style-link text-white"><BiMailSend style={{fontSize: "30px", marginRight: "8px", color: "#fff"}} />info@public.uz</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 footer-widget">
                            <h6 className="footer-widget__title mb-20">Havolalar</h6>
                            <ul className="footer-widget__list">
                                <li><a href="#" className="hover-style-link text-white">Maqolalar</a></li>
                                <li><a href="#" className="hover-style-link text-white">Konferensiyalar</a></li>
                                <li><a href="#" className="hover-style-link text-white">Xizmatlar</a></li>
                                <li><a href="#" className="hover-style-link text-white">Blog</a></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="footer-copyright-area section-space--pb_30">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start text-white">
                            <span className="copyright-text">© 2023 uznauka.uz. <a href="https://masterdev.uz/" target="blank">All Rights Reserved.</a></span>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <ul className="list ht-social-networks solid-rounded-icon">

                                <li className="item">
                                    <a href="https://twitter.com" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary text-white">
                                        {/* <i className="fab fa-twitter "></i> */}
                                        <BiLogoTwitter className='link-icon' />
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="https://facebook.com" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary text-white">
                                    <BiLogoFacebook className='social-icon fab fa-facebook-f' />
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="https://instagram.com" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary text-white">
                                    <BiLogoInstagram className='social-icon  fab fa-instagram'/>
                                    </a>
                                </li>
                                <li className="item">
                                    <a href="https://linkedin.com" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary text-white">
                                    <BiLogoLinkedinSquare className='social-icon fab fa-linkedin'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer