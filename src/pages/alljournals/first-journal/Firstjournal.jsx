import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import './firstjounal.css'
import Loading from '../../../components/loading/Loading'
import Modal from '../../../components/modal/Modal'
import Articles from '../../../components/aritcles/Articles'
import Rightside from '../../../components/rightside/Rightside'

function Firstjournal() {

    const [journals, setJournals] = useState([])
    const [showModal, setShowModal] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/journals/${id}`)
            .then((res) => setJournals(res.data))
            .catch((err) => console.error(err));
    }, [])


    const closeModal = () => {
        // window.open(`http://localhost:5000/journals/${id}`, '', 'height=700,width=1000');
        setShowModal(!showModal)
    };

    return (
        <div className=''>
            <div className='journal-hero'>
                <div className="journal-hero-img">
                    <img src="https://media.istockphoto.com/id/813136942/photo/selective-focus-of-stacking-magazine-place-on-table-in-living-room.webp?b=1&s=612x612&w=0&k=20&c=80XDdM-tI26jhuvMBZUsvJUxh97vb2FAE0pAfGHObAw=" alt="" />
                </div>
            </div>
            <div className='article-main container my-5'>
                <span>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Bosh sahifa</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Maqolalar</li>
                    </ol>
                </span>
                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 my-4 fst-italic border-bottom">
                            So'ngi maqolalar
                        </h3>
                        {journals.length === 0 ? (<Loading />) : (
                            <>
                                <div className="blog-post shadow p-3">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <span className="last_posts__img">
                                                <img src={journals.img} className='img-fluid' />
                                            </span>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="last_posts__big">
                                                <div className="last_posts">
                                                    <span className="last_posts__content">
                                                        <div className="journal-name">
                                                            <h5>{journals.name}</h5>
                                                        </div>
                                                        <span className="journal-desc">
                                                            <p>{journals.desc}</p>
                                                        </span>
                                                        <span className='journal-pdf'>

                                                            {showModal && <Modal closeModal={closeModal}>
                                                                <iframe src={journals.pdf} ></iframe>
                                                            </Modal>}
                                                        </span>
                                                    </span>
                                                </div>

                                                <div className="button-wrap mt-4">
                                                    <button type="button" className="journal-button-1" onClick={() => setShowModal(true)} >
                                                        Jurnalni ko'rish
                                                    </button>
                                                    <button className='journal-button-1'>Joriy nashr</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Articles />

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
                            </>
                        )}


                    </div>

                    {/* /////////////// RIGHT SIDE /////////// */}

                    <Rightside />
                </div>

            </div>
        </div>
    )
}

export default Firstjournal