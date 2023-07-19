import React from 'react'
import Counter from '../../components/counter/Counter'
import './about.css'

function About() {
  return (
    <>
      <div className="about-banner-wrap banner-space about-us-bg">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 m-auto">
                      <div className="about-banner-content text-center">
                          <h1 className="mb-15 text-white">Uznauka.uz</h1>
                          <h5 className="font-weight--normal text-white">"Uznauka" kompaniyasi g'ayratli olimlar tomonidan milliy va xorijiy ilm-fanni rivojlantirishga qaratilgan amaliy loyihalarning nazariy nuqtai-nazarlarini va amaliy natijalarining ommabopligini ta'minlaydigan ijtimoiy loyiha doirasida tashkil etilgan.</h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Counter />
      
    </>
  )
}

export default About