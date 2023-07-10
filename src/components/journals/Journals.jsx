import React from "react";
import "./journals.css";

import CAJ_1 from "../../assets/img/our-jurnals/CAJ-1.png";
import CAJ_2 from "../../assets/img/our-jurnals/CAJ-2.png";
import CAJ_3 from "../../assets/img/our-jurnals/CAJ-3.png";
import CAJ_4 from "../../assets/img/our-jurnals/CAJ-4.png";
import CAJ_5 from "../../assets/img/our-jurnals/CAJ-5.png";
import CAJ_6 from "../../assets/img/our-jurnals/CAJ-6.png";

function Journals() {
  return (
    <section>
      <div className="our-jurnals">
        <div className="container">
          <h1 className="title-our-jurnal text-center">Bizning jurnallar</h1>
          <div className="row">
            <div className="col-md-4 my-2">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_1} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal of Theoretical and Applied Sciences
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_2} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal of Medical and Natural Science
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 my-2">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_3} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal of Literature, Philosophy and Culture
                  </h5>
                </div>
              </div>
            </div>
            </div>
            
            <div className="row my-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_4} alt=""  className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal Of Arts And Design
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_5} alt=""  className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal Of Mathematical Theory And Computer
                    Sciences
                  </h5>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-img">
                  <img src={CAJ_6} alt=""  className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5 className="journal-name">
                    Central Asian Journal Of Social Sciences And History
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journals;
