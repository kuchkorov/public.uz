import './App.css';
import { Routes, Route} from 'react-router-dom'

import TopHeader from './components/topheader/TopHeader';
import Navbar from './components/navbar/Navbar';
import Main from './pages/main/Main';
import About from './pages/about/About';
import Journalspage from './pages/journals/Journalspage';
import Blog from './pages/blog/Blog';
import Services from './pages/services/Services';
import Contact from './pages/contact/Contact';
import Firstjournal from './pages/alljournals/first-journal/Firstjournal';
import Pagenotfound from './pages/pagenotfound/Pagenotfound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
        <div className="header-area">
            <div className="header-bottom-wrap">
                <TopHeader />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/journals' element={<Journalspage />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/firstjournal/:id' element={<Firstjournal />} />
                    <Route path="*" element={<Pagenotfound />} />
                </Routes>
                <Footer />
               
            </div>
        </div>
    </>
  );
}

export default App;



