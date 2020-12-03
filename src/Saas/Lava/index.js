import React from 'react';
import LavaLamp, { Blob } from './styles';

const StickyEffect = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    style={{ display: 'contents' }}
  >
    <defs>
      <filter id="goo">
        <feGaussianBlur
          in="SourceGraphic"
          stdDeviation="10"
          result="blur"
        />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
          result="goo"
        />
        <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </defs>
  </svg>
);

const Lava = () => {
  const blobs = [...new Array(10)].map((_, i) => (
    <Blob key={i} className="fade" />
  ));

  return (
    <>
      <LavaLamp>
        <div className="lava">{blobs}</div>
      </LavaLamp>
      <StickyEffect />
    </>
  );
};

export default Lava;
