import { useState } from 'react'
import './counter.css'
import '../../App.css'

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

function Counter() {

    const [counterOn, setCounterOn] = useState(false)
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="journal-counter">
                    <div className="fun-fact-wrapper bg-theme-default section-space--pb_30 section-space--pt_60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-sm-6 wow move-up animated" style={{ visibility: "visible" }}>
                                    <div className="fun-fact--two text-center">
                                        <div className="fun-fact__count counter">
                                            {counterOn && <CountUp start={0} end={120} duration={2} delay={0} />}
                                            +
                                        </div>
                                        <h6 className="fun-fact__text">Maqolalar</h6>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 wow move-up animated" style={{ visibility: "visible" }}>
                                    <div className="fun-fact--two text-center">
                                        <div className="fun-fact__count counter">
                                            {counterOn && <CountUp start={0} end={32} duration={2} delay={0} />}
                                            +
                                        </div>
                                        <h6 className="fun-fact__text">Jurnallar</h6>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 wow move-up animated" style={{ visibility: "visible" }}>
                                    <div className="fun-fact--two text-center">
                                        <div className="fun-fact__count counter">
                                            {counterOn && <CountUp start={0} end={73} duration={2} delay={0} />}
                                            +
                                        </div>
                                        <h6 className="fun-fact__text">Konferensiyalar</h6>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 wow move-up animated" style={{ visibility: "visible" }}>
                                    <div className="fun-fact--two text-center">
                                        <div className="fun-fact__count counter">
                                            {counterOn && <CountUp start={0} end={318} duration={2} delay={0} />}
                                            +
                                        </div>
                                        <h6 className="fun-fact__text">Postlar</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    )
}

export default Counter