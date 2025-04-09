import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import PropTypes from "prop-types";

function CustomBeforeArrow({ onClick }) {
  return (
    <button
      className="custom-arrow prev  flex items-center justify-center"
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
