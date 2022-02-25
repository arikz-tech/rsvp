import React, { useState } from "react";
import video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";
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
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to our wedding</HeroH1>
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
    </HeroContainer>
  );
};

export default HeroSection;