import React, { useState } from "react";
import mobileVideo from "../../videos/mobile.mp4";
import desktopVideo from "../../videos/desktop.mp4";
import thumb from "../../images/hero.jpg";
import { Button } from "../ButtonElement";
import Lottie from "react-lottie";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownward,
  ArrowDown,
  Image,
  ArowContainer,
} from "./HeroElements";

import arrowAnimation from "../../images/arrow.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: arrowAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const getVideoSrc = (width) => {
    if (width >= 1080) return desktopVideo;

    return mobileVideo;
  };

  const hasWindow = typeof window !== "undefined";

  return (
    <HeroContainer
      id="home"
      height={hasWindow ? window.innerHeight : 768}
      width={hasWindow ? window.innerWidth : 360}
    >
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={getVideoSrc(hasWindow ? window.innerWidth : 360)}
          type="video/mp4"
          onLoadedData={onLoadedData}
          style={{ opacity: isVideoLoaded ? 1 : 0 }}
        />
      </HeroBg>
      <HeroBg>
        <Image
          src={thumb}
          style={{
            opacity: isVideoLoaded ? 0 : 1,
          }}
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to our wedding </HeroH1>
        <HeroP>הזמנה לחתונה אריק & ענבר</HeroP>
        <HeroBtnWrapper>
          <Button
            to="confirm"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            offset={-80}
          >
            אישור הגעה{hover ? <ArrowDownward /> : <ArrowDown />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <ArowContainer>
        <Lottie options={defaultOptions} height={100} width={100} />
      </ArowContainer>
    </HeroContainer>
  );
};

export default HeroSection;
