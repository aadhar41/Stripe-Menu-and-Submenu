import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center' onMouseOver={closeSubmenu}>
        <article className='hero-info'>
          <h1>
            Payments infrastructure <br />
            for the modern web
          </h1>
          <p>
            Accept payments simply and securely with Stripe, the world’s #1
            payments platform.
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>
  )
}

export default Hero
