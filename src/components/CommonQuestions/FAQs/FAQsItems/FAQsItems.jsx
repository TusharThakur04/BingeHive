import { FAQsItemsWrapper } from "./FAQsItems.styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PropTypes from "prop-types";
import { HeadingTitleMd } from "../../../../styles/global/default";
function FAQsItems({ data, isActive, onShow }) {
  return (
    <FAQsItemsWrapper>
      <div className="FAQ-body">
        <div className="ques-body flex justify-between">
          <HeadingTitleMd>{data.question}</HeadingTitleMd>
          <div>
            {isActive ? (
              <KeyboardArrowUpIcon onClick={onShow} />
            ) : (
              <KeyboardArrowDownIcon onClick={onShow} />
            )}
          </div>
        </div>
        {isActive && (
          <HeadingTitleMd className="ans">{data.answer}</HeadingTitleMd>
        )}
      </div>
    </FAQsItemsWrapper>
  );
}

export default FAQsItems;

FAQsItems.propTypes = {
  data: PropTypes.object,
  isActive: PropTypes.bool,
  onShow: PropTypes.func,
};
