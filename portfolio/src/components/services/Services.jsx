import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
  <h5>What I offer</h5>
  <h2>Services</h2>

  <div className="container services__container">
    <article className="service">
      <div className="service__head">
        <h3>Web Dev/Design</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>User Interface</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Responsive Design</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Front-end Development</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>SEO & Google Ads</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Keyword Research</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>On-page Optimization</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>PPC Campaign Management</p>
        </li>
      </ul>
    </article>

    <article className="service">
      <div className="service__head">
        <h3>Content Creation</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Copywriting</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Blog Writing</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Content Editing</p>
        </li>
      </ul>
    </article>
  </div>
</section>

  )
}

export default Services
