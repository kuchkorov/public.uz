import './App.css';
import Hero from './components/hero/Hero';
import Indexation from './components/indexation/Indexation';
import Navbar from './components/navbar/Navbar';
import TopHeader from './components/topheader/TopHeader';

function App() {
  return (
    <div >
      {/* <div className="preloader-activate preloader-active open_tm_preloader">
        <div className="preloader-area-wrap">
            <div className="spinner d-flex justify-content-center align-items-center h-100">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    </div> */}

    {/* <!--====================  header area ====================--> */}
    <div className="header-area">

        {/* <!-- Header Top Wrap Start --> */}
        {/* <div className="header-top-wrap border-bottom">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center top-message"><a href="#">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</p>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- Header Top Wrap End --> */}

        <div className="header-bottom-wrap">
            <TopHeader />
            <Navbar />
            <Hero />
            <Indexation />
        </div>

    </div>












    </div>
  );
}

export default App;
