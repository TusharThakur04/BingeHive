import { BaseLinkPrimary } from "../../../styles/components/Button";
import {
  Container,
  HeadingTitle,
  Paragraph,
} from "../../../styles/global/default";
import { SectionTitleWrapper } from "./SectionTitle.styled";
import PropTypes from "prop-types";
function SectionTitle({ title, text, rightContentType }) {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className="title-grid flex text-centre justify-between flex-wrap">
          <div className="title-right">
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
          </div>
          <div className="title-right">
            {rightContentType === "title-button" && (
              <BaseLinkPrimary>
                <span className="btn-text">Ask a Question</span>
              </BaseLinkPrimary>
            )}
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  );
}

export default SectionTitle;

SectionTitle.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
