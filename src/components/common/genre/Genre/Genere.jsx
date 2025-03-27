import React from "react";
import { GenreWrapper } from "./Genre.styled";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CarouselHeading from "../Carousel/CarouselHeading";
import { GENRES } from "../../../../constants/mockData";
import CarouselItem from "../Carousel/CarouselItem";

function Genere() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <GenreWrapper>
      <CarouselHeading />

      <Slider {...settings}>
        {GENRES.map((Genere) => (
          <CarouselItem
            thumbnail={Genere.thumbnail}
            key={Genere.id}
            title={Genere.name}
          />
        ))}
      </Slider>
    </GenreWrapper>
  );
}

export default Genere;
