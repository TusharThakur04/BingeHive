import NavigateBeforeIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

function CustomBeforeArrow({ onClick }) {
  return (
    <button
      className="custom-prev-arrow  flex items-center justify-center"
      onClick={onClick}
    >
      <NavigateBeforeIcon color={"white"} />
    </button>
  );
}

CustomBeforeArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomBeforeArrow;
