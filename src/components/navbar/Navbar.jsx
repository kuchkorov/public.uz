import React from 'react'
import './navbar.css'
import Uz from '../../assets/img/flag/uzb.png'
import Ru from '../../assets/img/flag/rus.png'
import { Link } from 'react-router-dom'

import { BiChevronDown, BiChevronRight, BiSearchAlt2 } from "react-icons/bi";


function Navbar() {
  return (
    <div>
        <div className="header-bottom-wrap bg-theme-default d-md-block d-none header-sticky" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-bottom-inner position-relative">
                                <div className="header-bottom-left-wrap">
                                    {/* <!-- navigation menu --> */}
                                    <div className="header__navigation d-none d-xl-block">
                                        <nav className="navigation-menu navigation-menu--text_white">

                                            <ul>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <Link to="/"><span>Bosh sahifa</span></Link>
                                                    
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <Link to="/journals"><span>Jurnal</span><BiChevronDown className='react-icons' /></Link>
                                                    <ul className="submenu">
                                                        <li><Link to="/firstjournal"><span>Jurnal 1</span></Link></li>
                                                        <li><a href="index-infotechno.html"><span>Jurnal 2</span></a></li>
                                                        <li><a href="index-infotechno.html"><span>Jurnal 3</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <a href="#"><span>Konferensiya</span><BiChevronDown className='react-icons' /></a>
                                                    <ul className="submenu">
                                                        <li className="has-children">
                                                            <a href="about-us-01.html"><span>Konferensiya 1</span><BiChevronRight  className='subname-react-icons' /> </a>
                                                            <ul className="submenu">
                                                                <li><a href="about-us-01.html"><span>Konferensiya 1.1</span></a></li>
                                                                <li><a href="about-us-02.html"><span>Konferensiya 1.2</span></a></li>
                                                                <li className="has-children">
                                                                    <a href="#"><span>Konferensiya 1.3</span><BiChevronRight  className='subname-react-icons' /></a>
                                                                    <ul className="submenu">
                                                                        <li><a href="#"><span>Konferensiya 1.3.1</span></a></li>
                                                                        <li><a href="#"><span>Konferensiya 1.3.2</span></a></li>
                                                                        <li><a href="#"><span>Konferensiya 1.3.3</span></a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="contact-us.html"><span>Konferensiya 2</span></a></li>
                                                        <li><a href="leadership.html"><span>Konferensiya 3</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <Link to="/blog"><span>Blog</span><BiChevronDown className='react-icons' /></Link>
                                                    <ul className="submenu">
                                                        <li><a href="it-services.html"><span>IT Services</span></a></li>
                                                        <li><a href="managed-it-service.html"><span>Managed IT Services</span></a></li>
                                                        <li><a href="industries.html"><span>Industries</span></a></li>
                                                        <li><a href="business-solution.html"><span>Business solution</span></a></li>
                                                        <li><a href="it-services-details.html"><span>IT Services Details</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link to="/services"><span>Xizmatlar</span><BiChevronDown className='react-icons' /></Link>
                                                    {/* <!-- mega menu --> */}
                                                    <ul className="megamenu megamenu--mega">
                                                        <li>
                                                            <h2 className="page-list-title">XIZMATLAR 01</h2>
                                                            <ul>
                                                                <li><a href="element-accordion.html"><span>Accordions & Toggles</span></a></li>
                                                                <li><a href="element-box-icon.html"><span>Box Icon</span></a></li>
                                                                <li><a href="element-box-image.html"><span>Box Image</span></a></li>
                                                                <li><a href="element-box-large-image.html"><span>Box Large Image</span></a></li>
                                                                <li><a href="element-buttons.html"><span>Buttons</span></a></li>
                                                                <li><a href="element-cta.html"><span>Call to action</span></a></li>
                                                                <li><a href="element-client-logo.html"><span>Client Logo</span></a></li>
                                                                <li><a href="element-countdown.html"><span>Countdown</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 className="page-list-title">XIZMATLAR 02</h2>
                                                            <ul>
                                                                <li><a href="element-counters.html"><span>Counters</span></a></li>
                                                                <li><a href="element-dividers.html"><span>Dividers</span></a></li>
                                                                <li><a href="element-flexible-image-slider.html"><span>Flexible image slider</span></a></li>
                                                                <li><a href="element-google-map.html"><span>Google Map</span></a></li>
                                                                <li><a href="element-gradation.html"><span>Gradation</span></a></li>
                                                                <li><a href="element-instagram.html"><span>Instagram</span></a></li>
                                                                <li><a href="element-lists.html"><span>Lists</span></a></li>
                                                                <li><a href="element-message-box.html"><span>Message box</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 className="page-list-title">XIZMATLAR 03</h2>
                                                            <ul>
                                                                <li><a href="element-popup-video.html"><span>Popup Video</span></a></li>
                                                                <li><a href="element-pricing-box.html"><span>Pricing Box</span></a></li>
                                                                <li><a href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                <li><a href="element-progress-circle.html"><span>Progress Circle</span></a></li>
                                                                <li><a href="element-rows-columns.html"><span>Rows & Columns</span></a></li>
                                                                <li><a href="element-social-networks.html"><span>Social Networks</span></a></li>
                                                                <li><a href="element-tabs.html"><span>Tabs</span></a></li>
                                                                <li><a href="element-team-member.html"><span>Team member</span></a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <h2 className="page-list-title">XIZMATLAR 04</h2>
                                                            <ul>
                                                                <li><a href="element-testimonials.html"><span>Testimonials</span></a></li>
                                                                <li><a href="element-timeline.html"><span>Timeline</span></a></li>
                                                                <li><a href="element-carousel-sliders.html"><span>Carousel Sliders</span></a></li>
                                                                <li><a href="element-typed-text.html"><span>Typed Text</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children has-children--multilevel-submenu">
                                                    <Link to="/contact"><span>Aloqa</span></Link>
                                                    {/* <!-- multilevel submenu --> */}
                                                    {/* <ul className="submenu">
                                                        <li><a href="case-studies.html"><span>Case Studies 01</span></a></li>
                                                        <li><a href="case-studies-02.html"><span>Case Studies 02</span></a></li>
                                                        <li><a href="single-smart-vision.html"><span>Single Layout</span></a></li>
                                                    </ul> */}
                                                </li>
                                                {/* <li className="has-children has-children--multilevel-submenu">
                                                    <a href="blog-list-large-image.html"><span>Blog</span><BiChevronDown className='react-icons' /></a>
                                                    
                                                    <ul className="submenu">
                                                        <li><a href="blog-list-large-image.html"><span>List Large Image</span></a></li>
                                                        <li><a href="blog-list-left-large-image.html"><span>Left Large Image</span></a></li>
                                                        <li><a href="blog-grid-classic.html"><span>Grid Classic</span></a></li>
                                                        <li><a href="blog-grid-masonry.html"><span>Grid Masonry</span></a></li>
                                                        <li className="has-children">
                                                            <a href="blog-post-layout-one.html"><span>Single Layouts</span><BiChevronRight  className='subname-react-icons' /></a>
                                                            <ul className="submenu">
                                                                <li><a href="blog-post-layout-one.html"><span>Left Sidebar</span></a></li>
                                                                <li><a href="blog-post-right-sidebar.html"><span>Right Sidebar</span></a></li>
                                                                <li><a href="blog-post-no-sidebar.html"><span>No Sidebar</span></a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="language-menu">
                                        <ul>
                                            <li>
                                                <a href="#" className="">
                                                    <img className="ls-flag" src={Uz} alt="en" title="uzbek" style={{width: "40px"}} />
                                                    <span className="wpml-ls-native text-white">O'zbekcha</span>
                                                </a>

                                                <ul className="ls-sub-menu">
                                                    <li className="">
                                                        <a href="#" className="">
                                                            <img className="ls-flag" src={Ru} alt="en" title="rus" /><span className="wpml-ls-native">Русский</span>
                                                        </a>
                                                    </li>

                                                </ul>

                                            </li>

                                        </ul>
                                </div>

                                {/* <div className="header-search-form ">
                                    <form action="#" className="search-form-top style-03 ">
                                        <input className="search-field" type="text" placeholder="Qidiruv...."  />
                                        <button className="search-submit">
                                        <BiSearchAlt2 className="search-btn-icon" />
                                            
                                        </button>
                                    </form>
                                </div> */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Navbar