import { Link } from "react-router-dom";
import { GenreItemWrapper } from "./GenreItem.styled";
import PropTypes from "prop-types";
import EastIcon from "@mui/icons-material/East";

function GenreItem({ data }) {
  return (
    <GenreItemWrapper>
      <div className="item-content">
        <div className="item-img">
          <img src={data.thumbnail} alt={data.name} />
        </div>
        <div className="item-body flex items-center justify-between">
          <div className="item-title font-semibold">{data.name}</div>
          <Link to="/shows">
            <EastIcon />
          </Link>
        </div>
      </div>
    </GenreItemWrapper>
  );
}

GenreItem.propTypes = {
  data: PropTypes.object,
};
export default GenreItem;
