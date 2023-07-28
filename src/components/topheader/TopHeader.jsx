import React from 'react'
import './topheader.css'
import {Link} from 'react-router-dom'
import {BiPhone, BiSolidMap, BiLogoTelegram, BiSolidComment, BiHourglass, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";
import logo from '../../assets/img/logo/uznauka.png'
function TopHeader() {
  return (
    <div className='top-hedaer'>
        <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header position-relative">
                            {/* <!-- brand logo --> */}
                            <div className="header__logo top-logo">
                                <Link to="/">
                                    <img src={logo} aria-label="Mitech Logo" width="160" height="48" className="img-fluid" alt="" />
                                </Link>
                            </div>

                            <div className="header-right flexible-image-slider-wrap">

                                <div className="header-right-inner" id="hidden-icon-wrapper">
                                    {/* <!-- Header Search Form --> */}
                                    <div className="header-search-form d-md-none d-block">
                                        <form action="#" className="search-form-top">
                                            <input className="search-field" type="text" placeholder="Search…" />
                                            <button className="search-submit">
                                                <i className="search-btn-icon fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>

                                    {/* <!-- Header Top Info --> */}
                                    <div className="swiper-container header-top-info-slider-werap top-info-slider__container">
                                        <div className="swiper-wrapper header-top-info-inner default-color">
                                            <div className="swiper-slide_1">
                                                <div className="info-item">
                                                    <div className="info-icon">
                                                        <span className="fa fa-phone"><BiPhone /></span>
                                                    </div>
                                                    <div className="info-content">
                                                        <h6 className="info-title">+998(93) 527-16-22</h6>
                                                        <div className="info-sub-title">ilmiyizlanuvchi@gmail.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* <div className="swiper-slide_1">
                                                <div className="info-item">
                                                    <div className="info-icon">
                                                        <span className="fa fa-map-marker-alt"><BiSolidMap /></span>
                                                    </div>
                                                    <div className="info-content">
                                                        <h6 className="info-title">A.Navoiy ko`chasi, 30-uy</h6>
                                                        <div className="info-sub-title">O'zbekiston, Toshkent</div>
                                                    </div>
                                                </div>
                                            </div> */}
                                            {/* <div className="swiper-slide_1">
                                                <div className="info-item">
                                                    <div className="info-icon">
                                                        <span className="fa fa-clock"><BiHourglass /></span>
                                                    </div>
                                                    <div className="info-content">
                                                        <h6 className="info-title">9:00 - 18:00</h6>
                                                        <div className="info-sub-title">Dushanbadan Shanbagacha</div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="swiper-slide_1">
                                                <div className="info-item">
                                                    <div className="info-icon">
                                                        <span className="fas fa-comment-alt"><BiSolidComment /></span>
                                                    </div>
                                                    <div className="info-content">
                                                        <h6 className="info-title">Onlayn 24/7</h6>
                                                        <div className="info-sub-title">+998(93) 527-16-22</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- Header Social Networks --> */}
                                    <div className="header-social-networks style-icons">
                                        <div className="inner">
                                            <a className=" social-link hint--black hint--bottom-left" aria-label="Telegram" href="https://t.me/uznauka_uz" data-hover="Twitter" target="_blank">
                                                <BiLogoTelegram className='social-icon' />
                                            </a>
                                            <a className=" social-link hint--black hint--bottom-left" aria-label="Facebook" href="https://facebook.com" data-hover="Facebook" target="_blank">
                                               
                                                <BiLogoFacebook className='social-icon fab fa-facebook-f' />
                                            </a>
                                            <a className=" social-link hint--black hint--bottom-left" aria-label="Instagram" href="https://instagram.com" data-hover="Instagram" target="_blank">
                                               
                                                <BiLogoInstagram className='social-icon  fab fa-instagram'/>
                                            </a>
                                            <a className=" social-link hint--black hint--bottom-left" aria-label="Linkedin" href="https://linkedin.com" data-hover="Linkedin" target="_blank">
                                               
                                                <BiLogoLinkedinSquare className='social-icon fab fa-linkedin'/>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                                {/* <!-- mobile menu --> */}
                                {/* <div className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                                    <i></i>
                                </div> */}
                                {/* <!-- hidden icons menu --> */}
                                {/* <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                                    <a href="javascript:void(0)">
                                        <i className="far fa-ellipsis-h-alt"></i>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default TopHeader