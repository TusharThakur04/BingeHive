import React from "react";
import { CrslHeadingWrapper } from "./CarouselHeading.styled";
import { HeadingTitleMd, Paragraph } from "../../../../styles/global/default";
function CarouselHeading() {
  return (
    <CrslHeadingWrapper>
      <HeadingTitleMd>Explore our wide variety of categories</HeadingTitleMd>
      <Paragraph>
        Whether you're looking for a comedy to make you laugh, a drama to make
        you think, or a documentary to learn something new.
      </Paragraph>
    </CrslHeadingWrapper>
  );
}

export default CarouselHeading;
