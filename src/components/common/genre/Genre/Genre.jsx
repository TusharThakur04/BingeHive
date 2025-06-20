import SectionTitle from "../../SectionTitle/SectionTitle";
import { GenreWrapper } from "./Genere,styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GENRES } from "../../../../constants/mockData";
import GenreItem from "../GenreItem/GenreItem";
import { SliderWrapper } from "../../Slider/Slider.styled";
import CustomBeforeArrow from "../../Slider/CustomPrevArrow";
import CustomNextArrow from "../../Slider/CustomNextArrow";

function Genre() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <GenreWrapper>
      <SectionTitle
        title={"Explore our variety of categories"}
        text={
          "Whether you are looking for a comedy to make tou laugh , a drama to make toy think, or a documentary to learn something new."
        }
      />

      <SliderWrapper>
        <Slider
          {...settings}
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomBeforeArrow />}
        >
          {GENRES?.map((genre) => (
            <GenreItem data={genre} key={genre.id} />
          ))}
        </Slider>
      </SliderWrapper>
    </GenreWrapper>
  );
}

export default Genre;
