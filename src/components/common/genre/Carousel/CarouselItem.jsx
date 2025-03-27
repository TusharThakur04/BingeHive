import { Link } from "react-router-dom";
import { CrslItemWrapper } from "./CarouselItem.styled";
import PropTypes from "prop-types";
function CarouselItem({ thumbnail, title }) {
  return (
    <CrslItemWrapper>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
      <Link>click</Link>
    </CrslItemWrapper>
  );
}

export default CarouselItem;

CarouselItem.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
