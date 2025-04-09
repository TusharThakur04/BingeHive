import { Link } from "react-router-dom";
import { GenreItemWrapper } from "./GenreItem.styled";
import PropTypes from "prop-types";
import CustomNextArrow from "../../Slider/CustomNextArrow";

function GenreItem({ data }) {
  return (
    <GenreItemWrapper>
      <div className="item-content">
        <div className="item-img">
          <img src={data.thumbnail} alt={data.name} />
        </div>
        <div className="item-body flex items-center justify-center">
          <div className="item-title font-semibold">{data.name}</div>
        </div>
        {/* <Link to="/">
          <CustomNextArrow />
        </Link> */}
      </div>
    </GenreItemWrapper>
  );
}

GenreItem.propTypes = {
  data: PropTypes.object,
};
export default GenreItem;
