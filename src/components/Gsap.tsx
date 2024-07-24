/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React from 'react';

import Logo from '@/public/assets/images/LogoEZ990.svg';

const Gsap = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.logo',
      { backgroundColor: 'rgba(0,0,0,1)', duration: 4.0, opacity: 0 },
      { duration: 4.0, opacity: 1, scale: 1, rotate: 360, ease: 'back' },
    );
  });
  return (
    <div className=" size-60 sm:size-96">
      <Image className=" mx-auto mt-12 sm:mt-3" alt="logo" src={Logo} />
    </div>
  );
};

export default Gsap;
