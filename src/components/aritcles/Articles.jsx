import {useState, useEffect} from 'react'
import './articles.css'
import axios from "axios"
import Modal from '../modal/Modal'

function Articles() {

    
    const [article, setArticle] = useState([])
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(!showModal)
    };


    // Articles
    useEffect(() => {
        const fetchArticles = async () => {
          try {
          const res = await axios.get(`http://localhost:8800/articles`)
          setArticle(res.data)
          } catch (error) {
            console.error(error)
          }
        }
        fetchArticles()
      }, []);


  return (
    <div>
        {article.map((value) => {
            return(
                <div className='main-article shadow p-4' key={value.id}>
                    <div className="name-article">
                        <span>{value.name}</span>
                    </div>
                    <div className="autor-article my-3">
                        <span>{value.autor}</span>
                    </div>
                        <a href={value.file} className='pdf-button' download={value.name}>Yuklash</a>   
                </div>
            )
        })}
        <div className="breadcrumb">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Articles