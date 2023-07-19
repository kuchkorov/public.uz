import {useState, useEffect} from 'react'
import './articles.css'
import axios from "axios"
import Modal from '../modal/Modal'

function Articles() {

    const [articles, setArticles] = useState([])
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(!showModal)
    };


    useEffect(() => {
        axios.get(`http://localhost:5000/articles`)
            .then((res) => setArticles(res.data))
            .catch((err) => console.error(err));
    }, [])

  return (
    <div>
        {articles.map((value) => {
            return(
                <div className='main-article shadow p-4' key={value.id}>
                    <div className="name-article">
                        <span>{value.name}</span>
                    </div>
                    <div className="autor-article my-3">
                        <span>{value.autor}</span>
                    </div>

                            <a href={value.pdf} className='pdf-button' download={value.name}>Yuklash</a>
                            
                    {/* {showModal && <Modal closeModal={closeModal}>
                        <span className='pdf-article'>
                            <iframe src={value.pdf} ></iframe>
                        </span>
                    </Modal>} */}

                    {/* <button className='pdf-button' onClick={() => setShowModal(true)} >Yuklash</button>     */}
                </div>
            )
        })}
    </div>
  )
}

export default Articles