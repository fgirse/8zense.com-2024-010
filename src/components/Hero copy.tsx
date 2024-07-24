/* eslint-disable tailwindcss/no-custom-classname */

'use client';

import Image from 'next/image';
import React from 'react';

import Gsap from './Gsap';

// import { useTranslations } from 'next-intl';
import HeroImage from '../../public/assets/images/interiore14.jpg';

const Hero = () => {
  // const t = u01seTranslations('');

  return (
    <section id="section-Hero" className="">
      <div className="relative flex min-h-screen flex-col items-center">
        <Image alt="Hero" src={HeroImage} fill sizes="100vw" />

        <div className="bg-gradient to-bottom from mx-auto flex w-full flex-col items-center justify-between bg-black/80 to-transparent">
          <section className="">
            <h1 className="text sm-leading-3 lg:text-wsAbhite relative mt-20 h-60 rounded-xl bg-gradient-to-b from-slate-800 to-transparent p-2 text-4xl font-black  uppercase text-neutral-100 sm:py-12 sm:text-4xl md:text-6xl lg:relative lg:py-6 lg:text-left lg:text-[4.33rem] lg:font-black lg:uppercase  lg:leading-9 xl:text-[4.66rem] 2xl:text-[7.166rem]">
              Design interior
            </h1>

            <h1 className="relative -mt-40 text-5xl font-black uppercase leading-3 text-lime-200 sm:mt-2 sm:text-8xl md:-mt-12 md:text-9xl lg:-mt-3 lg:text-[7.33rem] lg:font-black lg:leading-3 xl:text-[11.33rem]">
              8zense.com
            </h1>

            <p className="leading-0 relative  mt-5 px-3 text-center text-[2.66rem] text-neutral-100 sm:text-4xl lg:text-left lg:text-4xl lg:font-black">
              Timeless
            </p>
          </section>
          <div className="sd:h-72 relative top-8  mx-auto size-60 sm:w-72 sm:py-12 md:size-80">
            <Gsap/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
