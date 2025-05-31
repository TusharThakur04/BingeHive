import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

function CustomNextArrow({ onClick }) {
  return (
    <button
      className="custom-arrow next flex items-center justify-center"
      onClick={onClick}
    >
      <NavigateNextIcon />
    </button>
  );
}

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;
