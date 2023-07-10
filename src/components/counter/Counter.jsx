import React from 'react'
import './counter.css'
import '../../App.css'

function Counter() {
  return (
    <>
        <div className="journal-counter">
            {/* <div className="container"> */}
                <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 wow move-up animated" style={{visibility: "visible"}}>
                                <div className="fun-fact--two text-center">
                                    <div className="fun-fact__count counter">120</div>
                                    <h6 className="fun-fact__text">Maqolalar</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow move-up animated" style={{visibility: "visible"}}>
                                <div className="fun-fact--two text-center">
                                    <div className="fun-fact__count counter">32</div>
                                    <h6 className="fun-fact__text">Jurnallar</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow move-up animated" style={{visibility: "visible"}}>
                                <div className="fun-fact--two text-center">
                                    <div className="fun-fact__count counter">73</div>
                                    <h6 className="fun-fact__text">Konferensiyalar</h6>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow move-up animated" style={{visibility: "visible"}}>
                                <div className="fun-fact--two text-center">
                                    <div className="fun-fact__count counter">318</div>
                                    <h6 className="fun-fact__text">Postlar</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </>
  )
}

export default Counter