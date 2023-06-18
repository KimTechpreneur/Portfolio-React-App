import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/Portfolio1.png'
import Portfolio2 from '../../assets/Portfolio2.png'
import Portfolio3 from '../../assets/Portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio1} alt="Doubletikk" />
          </div>
          <h3>Developer at Doubletikk</h3>
          <a href="https://githup.com" className='btn'style={{ marginRight: '3rem' }}>Github</a>
          <a href="https://github.com/KimTechpreneur/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

         

         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio3} alt="Clothing Website" />
          </div>
          <h3>UI/UX FoodyDash</h3>
          <a href="https://githup.com" className='btn'style={{ marginRight: '3rem' }}>Github</a>
          <a href="https://github.com/KimTechpreneur/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>

      
         <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Portfolio2} alt="Shopping Website" />
          </div>
          <h3>Designer EstudyUniverse</h3>
          <a href="https://githup.com" className='btn'style={{ marginRight: '3rem' }}>Github</a>
          <a href="https://github.com/KimTechpreneur/" className='btn btn-primary' target='_blank'>Live Demo</a>
         </article>
        
      </div>

       
    </section>
  )
}

export default Portfolio
