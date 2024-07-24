/* eslint-disable import/no-extraneous-dependencies */

'use client';

// eslint-disable-next-line import/no-self-import
import Caroussel from '@/components/HorizontalScrollCarousel';

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <h1 className="text-center text-4xl uppercase text-white md:text-6xl lg:text-[5.33rem]">
        Das Team
      </h1>
      <Caroussel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

export default Example;
