import { BaseLinkPrimary } from "../../../../styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../../styles/global/default";
import { ShowsBannerWrapper } from "./ShowsBanner.styles";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { MdLanguage } from "react-icons/md";
import { Icons } from "../../../../assets/icons";

const ShowsBanner = ({ showsData }) => {
  const randomShow = showsData.slice(0, 15)[Math.floor(Math.random() * 15)];
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
          <div className="banner-content text-center">
            <HeadingTitle className="banner-title">
              {randomShow?.name}
            </HeadingTitle>
            <div
              className="summary-text"
              dangerouslySetInnerHTML={{
                __html: randomShow?.summary?.substring(0, 240) + " ...",
              }}
            ></div>
            <div className="banner-info flex flex-col items-center">
              <BaseLinkPrimary
                to={randomShow?.officialSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn-text">Visit Official Site</span>
                <span className="btn-icon">
                  <FiExternalLink />
                </span>
              </BaseLinkPrimary>
              <div className="flex items-center flex-wrap banner-info-item">
                <Paragraph>
                  <span className="font-bold text-white">Genre:</span>
                  <span className="font-semibold">
                    {randomShow?.genres?.join(", ")}
                  </span>
                </Paragraph>
                <ul className="info-list flex items-center justify-center flex-wrap">
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <MdLanguage size={20} />
                    </span>
                    <span className="info-item-value">
                      {randomShow?.language}
                    </span>
                  </li>
                  <li className="inline-flex items-center info-item">
                    <span className="info-item-icon inline-flex items-center justify-center">
                      <img src={Icons.Star} alt="" />
                    </span>
                    <span className="info-item-value">
                      {randomShow?.rating?.average}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ShowsBannerWrapper>
  );
};

export default ShowsBanner;

ShowsBanner.propTypes = {
  showsData: PropTypes.array,
};
