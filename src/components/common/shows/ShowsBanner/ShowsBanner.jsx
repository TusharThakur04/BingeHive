import { Container } from "../../../../styles/global/default";
import { ShowsBannerWrapper } from "./ShowsBanner.styles";
import PropTypes from "prop-types";

const ShowsBanner = ({ showsData }) => {
  const randomShow = showsData.slice(0, 15)[Math.floor(Math.random() * 15)];
  const show = showsData[169];
  console.log(randomShow);
  return (
    <ShowsBannerWrapper className="top-spacing-fix">
      <Container>
        <div
          className="banner flex justify-center items-end"
          style={{
            background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0.00) 100%), url(${randomShow?.image?.original}) top/cover no-repeat fixed`,
          }}
        >
          hi
        </div>
      </Container>
    </ShowsBannerWrapper>
  );
};

export default ShowsBanner;

ShowsBanner.propTypes = {
  showsData: PropTypes.array,
};
