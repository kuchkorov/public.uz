import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import "./journals.css";

function Journals() {

  const [journals, setJournals] = useState([])


  useEffect(() => {
    const fetchAllJOurnals = async () => {
      try {
      const res = await axios.get("http://localhost:8800/journals")
      setJournals(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchAllJOurnals()
  }, []);

  return (
    <section>
      <div className="our-jurnals">
        <div className="container">
          <h1 className="title-our-jurnal text-center">Bizning jurnallar</h1>
          <div className="row">
            {journals.map((value)=> {
              return(
                <div className="col-md-4 my-2"  key={value.id}>
                <div className="card">
                  <div className="card-img">
                    <img src={value.img} alt="" className="img-fluid" />
                  </div>
                  <div className="card-body">
                    <h5 className="journal-name">
                     {value.name}
                    </h5>
                  </div>
                <Link to={`/firstjournal/${value.id}`} className="btn btn-success">Batafsil</Link>
                </div>
              </div>
              )
            })}
          
        </div>
      </div>
      </div>
    </section>
  );
}

export default Journals;
