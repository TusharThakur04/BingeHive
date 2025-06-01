import { Container } from "../../../../styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import CustomNextArrow from "../../Slider/CustomNextArrow";
import CustomBeforeArrow from "../../Slider/CustomPrevArrow";
import { ShowsSliderWrapper } from "./ShowsSlider.styles";
import Slider from "react-slick";
import PropTypes from "prop-types";
import ShowsItem from "../ShowsItem/ShowsItem";
import { HIGH_RATED_SHOWS } from "../../../../constants/showsConstants";
import { SliderWrapper } from "../../Slider/Slider.styled";

const ShowsSlider = ({ showsData, showsTitle }) => {
  const showsInSlider = showsData.slice(0, 15);
  console.log(showsInSlider);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 900000,
    speed: 400,
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
    <ShowsSliderWrapper>
      <SectionTitle title={showsTitle} />
      <Container>
        <SliderWrapper>
          <Slider
            {...settings}
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomBeforeArrow />}
          >
            {showsInSlider.map((showsInSlider, index) => (
              <ShowsItem
                key={index}
                itemData={showsInSlider}
                itemType={HIGH_RATED_SHOWS}
              />
            ))}
          </Slider>
        </SliderWrapper>
      </Container>
    </ShowsSliderWrapper>
  );
};

export default ShowsSlider;

ShowsSlider.propTypes = {
  showsData: PropTypes.array.isRequired,
  showsTitle: PropTypes.string.isRequired,
};
