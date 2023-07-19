import React from 'react'
import './rightside.css'
function Rightside() {
    return (
        <>
            <div className="col-md-4">
                <div className="position-sticky" style={{ top: "2rem" }}>

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
                                    <div className="img-news">
                                        <img src="https://cdn.uza.uz/2023/07/18/14/28/BkDlzZd5L5OKw5CH3YRUrooVMELct2LK_small.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h6 className="mb-0">Оролбўйи минтақасидаги лойиҳа якунланди. Натижа қандай?</h6>
                                        <small className="text-body-secondary">18.07.2023</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                    <div className="img-news">
                                        <img src="https://cdn.uza.uz/2023/07/18/14/00/r6FCx32H4E7lUErjcJ7XlqsXkCJV6wYY_small.jpg" width="100%" height="96" alt="" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h6 className="mb-0">Оролбўйи минтақасидаги лойиҳа якунланди. Натижа қандай?</h6>
                                        <small className="text-body-secondary">18.07.2023</small>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                                    <div className="img-news">
                                        <img src="https://cdn.uza.uz/2023/07/14/07/16/4fhetY8bkmwWywGCnV1JzLQUkWQ7DGpB_small.jpg" width="100%" height="96" alt="" />
                                    </div>
                                    <div className="col-lg-8">
                                        <h6 className="mb-0">Ҳазрат Али зиёратгоҳига эътибор зарур</h6>
                                        <small className="text-body-secondary">19.07.2023</small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rightside