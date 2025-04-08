import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PropTypes from "prop-types";

function CustomNextArrow({ onClick }) {
  return (
    <button
      className="custom-next-arrow  flex items-center justify-center"
      onClick={onClick}
    >
      <NavigateNextIcon color={"white"} />
    </button>
  );
}

CustomNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default CustomNextArrow;
