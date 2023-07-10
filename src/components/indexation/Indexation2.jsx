import React from 'react'
import './indexation2.css'

import slide_image_1 from "../../assets/img/base.png";
import slide_image_2 from "../../assets/img/cressfor.png";
import slide_image_3 from "../../assets/img/dimensions.png";
import slide_image_4 from "../../assets/img/google.png";
import slide_image_5 from "../../assets/img/index.png";
import slide_image_6 from "../../assets/img/issn.png";
import slide_image_7 from "../../assets/img/ssrn.png";

function Indexation2() {
  return (
    <section className='indexation'>
        <div className="slider">
                <div className="container">
                <h1 className="text-color-primary text-center">Index jurnallari</h1>
                    <div className="row">
                        <div className="col-lg-12">
                            {/* <!-- brand logo slider --> */}
                            <div className="slider-track">
                                
                                    <div className="slide">
                                        <img src={slide_image_1} className="img-fluid" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src={slide_image_2} className="img-fluid" alt="" />
                                    </div>
                                
                                
                                    <div className="slide">
                                        <img src={slide_image_3} className="img-fluid" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src={slide_image_4} className="img-fluid" alt="" />
                                    </div>
                                
                                
                                    <div className="slide">
                                        <img src={slide_image_5} className="img-fluid" alt="" />
                                    </div>
                                    <div className="slide">
                                        <img src={slide_image_6} className="img-fluid" alt="" />
                                    </div>
                                
                                
                                    <div className="slide">
                                        <img src={slide_image_7} className="img-fluid" alt="" />
                                    </div>                             
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Indexation2