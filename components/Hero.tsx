'use client';

import Image from 'next/image';
import { CustomButton } from '@/components';

export default function Hero() {

  const handleScroll = () => {}


  return (
    <section className="hero">
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            Find, choose and rent a car - quickly and simply!
          </h1>
          <p className="hero__subtitle">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
          <CustomButton 
            title="Explore Cars"
            btnStyles="mt-10 bg-primary-blue text-white rounded-xl"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="/assets/hero.png" alt="hero" fill className="object-contain" />
          </div>
          {/* backgound image */}
          <div className="hero__image-overlay" />
        </div>
    </section>
  )
}
