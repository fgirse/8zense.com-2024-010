import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from '../../public/assets/images/LogoEZ990.svg';

const InfoBar = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-700 text-center text-lg     ">
      <div className="flex w-screen flex-row items-center justify-around bg-slate-700">
        <Link href="/" className="ml-5">
          <div className=" md:flex md:flex-row md:items-center md:justify-center md:gap-x-7">
            <div className="relative mb-1 mt-2 size-12 hover:translate-x-2 hover:translate-y-2 hover:bg-slate-500">
              <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com" />
            </div>

            <h1 className="hidden text-slate-400 md:mr-6 md:block  md:scale-125 md:text-lg md:hover:translate-x-2 md:hover:translate-y-2 md:hover:text-slate-300 xl:text-xl">
              8zenSe.com
            </h1>
          </div>
        </Link>

        <div className="mr-5 w-1/2 text-5xl">
          <SignedOut>
            <SignInButton>
              <button
                type="button"
                className="w-40 rounded-full bg-[#fcfc40] px-4 py-2 text-xl font-bold uppercase text-slate-400 hover:border-2 hover:bg-orange-600 hover:text-white"
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="text-3xl">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
