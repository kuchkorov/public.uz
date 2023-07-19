import React from 'react'
import './modal.css'
import { BiPlusCircle } from "react-icons/bi";

function Modal({ children, closeModal }) {
    return (
        <div className="modal-backdrop1">
            <div className="modal1">{children}
                <span className='btn' onClick={closeModal}> <BiPlusCircle />Yopish</span>

            </div>
        </div>
    );
}

export default Modal