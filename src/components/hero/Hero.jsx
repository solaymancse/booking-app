import img  from '../../assets/background.jpg'
import { Navbar } from '../layout/navbar/Navbar'
import './hero.css'

export const Hero = () => {
  return (
    <section className="hero_section">
      <img src={img} alt="" />
      <Navbar/>

      <div className="hero_heading">
        <h1 className='hero-top-heading'>A Life Time of Discounts ?</h1>
        <span>Its Genius.</span>
        <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free solaymanair account</p>
      </div>

    </section>
  )
}
