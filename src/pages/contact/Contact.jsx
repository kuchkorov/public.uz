import React from 'react'
import Yandexmaps from '../../components/yandexmaps/Yandexmaps';
import './contact.css'

function Contact() {
  return (
    <div className='contact'>

      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb_box text-center">
                <h2 className="breadcrumb-title">Aloqa</h2>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-item"><a >Bosh sahifa</a></li>
                  <li className="breadcrumb-item active">Aloqa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=" form-component mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form>
                <label for="validationCustom01" className="form-label mt-2">Ism</label>
                <input type="text" className="form-control" id="validationCustom01" required />

                <label className="form-label mt-2">Familiya</label>
                <input type="text" className="form-control" id="validationCustom02" required />

                <label for="validationCustom03" className="form-label mt-2">Telefon raqam</label>
                <input type="text" className="form-control" id="validationCustom03" required />

                <label for="validationCustom04" className="form-label mt-2">Taklif va fikrlar</label>
                <textarea className="form-control" id="validationCustom04" style={{ height: "100px" }} required ></textarea>


                <button className=" contact-btn-primary mt-4" type="submit">Yuborish</button>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact-img text-center">
                {/* <img src="https://okh.uin-malang.ac.id/wp-content/uploads/2019/02/form-icon.png" width="300" alt="" /> */}
                <Yandexmaps />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact