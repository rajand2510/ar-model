import React from 'react';
import Spline from '@splinetool/react-spline';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Mobile devices (max-width: 767px)

  return (
    <>
      {isMobile ? (
        <Spline scene="https://prod.spline.design/gYwJn0w264BfpUen/scene.splinecode" />
      ) : (
        <Spline scene="https://prod.spline.design/Lq8gdfcvLF7j66MD/scene.splinecode" />
      )}
        <figure>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9dab041f6b0ac4b8d62e7b24c40723c88dc6d6b64ce4ed64155dd324bc0a9bd?apiKey=980db322e33a4a39a5052caa449e1da6&"
          className="w-full  border-4 border-white border-solid aspect-[3.57] fill-[url(<path-to-image>)_lightgray_-2.592px_-130.776px_/_100.556%_130.843%_no-repeat] stroke-[4px] stroke-white"
          alt="Decorative image"
        />
      </figure>
    </>
  );
}

export default Hero;
