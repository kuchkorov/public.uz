import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './firstjounal.css'
import Loading from '../../../components/loading/Loading'
import Loading2 from '../../../components/loading/Loading2'

function Firstjournal() {
    const [journals, setJournals] = useState([])
    // const [journal, setJournal] = useState("")
    const [spinner, setSpinner] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/journals/${id}`)
            .then((res) => setJournals(res.data))
            .catch((err) => console.error(err));
    }, [])




    // const pdfUrl = ; 

        const handleOpenPDF = () => {
            window.open(`http://localhost:5000/journals/${id}`, '', 'height=700,width=1000');
        };

    // console.log(journals);

    return (
        <div className=''>
            <div className='journal-hero'>
                <div className="journal-hero-img">
                    <img src="https://cajmns.centralasianstudies.org/plugins/themes/academic_pro/styles/header/header_blue.jpg" alt="" />
                </div>
            </div>
            <div className='article-main container my-5'>
                <div className="row g-5">
                    <div className="col-md-8">
                        <h3 className="pb-4 mb-4 fst-italic border-bottom">
                            So'ngi maqolalar
                        </h3>
                        {journals.length === 0 ? (<Loading />) : (
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
                                                    <span>
                                                        <iframe src={journals.pdf} width="600" height="400"></iframe>
                                                    </span>
                                                </span>
                                            </div>
                                            <div className="button-wrap mt-4">
                                                <button className='journal-button-1' onClick={handleOpenPDF}>
                                                    {spinner ? (<Loading2 />) : (
                                                        <span>Jurnalni ko'rish</span>
                                                    )}
                                                </button>
                                                <button className='journal-button-1'>Joriy nashr</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}


                    </div>

                    {/* /////////////// RIGHT SIDE /////////// */}

                    <div className="col-md-4">
                        <div className="position-sticky" style={{ top: "2rem" }}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic">TAHRIRIYAT</h4>
                                <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                            </div>

                            <div className="p-4">
                                <ul className="list-group text-center text-uppercase">
                                    <li className="list-group-item my-1" aria-current="true">Tahrir hay'ati</li>
                                    <li className="list-group-item my-1">Maqola talablari</li>
                                    <li className="list-group-item my-1">Axborot xati</li>
                                    <li className="list-group-item my-1">Ommaviy offerta</li>
                                    <li className="list-group-item my-1">Xizmatlar</li>
                                </ul>
                            </div>

                            <div className="p-4 fst-italic">
                                <h4 className="fst-italic">Jurnal indexlari</h4>
                                <img src="https://inscience.uz/templates/images/openaccess.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/google-scholar.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/cyberleninka.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/index-copernicus.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/researchbib.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/internet-archive.png" className='img-fluid p-2' alt="" />
                                <img src="https://oriens.uz/media/indexes/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png" className='img-fluid p-2' alt="" />
                            </div>

                            <div>
                                <h4 className="fst-italic2">So'ngi yangiliklar</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                            <div className="col-lg-8">
                                                <h6 className="mb-0">Example blog post title</h6>
                                                <small className="text-body-secondary">January 15, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                            <div className="col-lg-8">
                                                <h6 className="mb-0">This is another blog post title</h6>
                                                <small className="text-body-secondary">January 14, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                            <svg className="bd-placeholder-img" width="100%" height="96" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                                            <div className="col-lg-8">
                                                <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                                                <small className="text-body-secondary">January 13, 2023</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Firstjournal