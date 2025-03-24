import React from "react";
import { BannerWrapper } from "./Banner.styles";
import { BaseLinkPrimary } from "../../../styles/components/Button";

import routeConstants from "../../../constants/routeConstants";

import {
  Container,
  Paragraph,
  HeadingBanner,
} from "../../../styles/global/default";
function Banner() {
  return (
    <BannerWrapper>
      <div className="banner-img"></div>
      <Container className="text-center">
        <div className="banner-content mx-auto">
          <HeadingBanner>The Best Streaming Experience</HeadingBanner>
          <Paragraph className="banner-text text-lg">
            BingeHive is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            BingeHive, you can enjoy a wide variety of content, including the
            latest blockblusters, classic movies, popular TV shows, and more.
            You can also create your own watchlists, so you can easily find the
            contnet you want to watch.
          </Paragraph>
          <BaseLinkPrimary to={routeConstants.SHOWS}>
            <span className="btn-icon">
              <img src="" alt="" />
            </span>
            <span className="btn-text">Start Watching Now</span>
          </BaseLinkPrimary>
        </div>
      </Container>
    </BannerWrapper>
  );
}

export default Banner;
