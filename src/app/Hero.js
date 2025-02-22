import Image from 'next/image'
import React from 'react'
import hero from '@/images/hero3.jpg'

const Hero = () => {
  return (
    <div>
      <Image src={hero} alt="hero" className='rounded-b-3xl'/>
    </div>
  )
}

export default Hero
