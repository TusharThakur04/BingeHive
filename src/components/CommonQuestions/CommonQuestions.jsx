import { CommonQuestionsWrapper } from "./CommonQuestions.styled";
import SectionTitle from "../common/SectionTitle/SectionTitle";

function CommonQuestions() {
  return (
    <CommonQuestionsWrapper>
      <hr />
      <SectionTitle
        title={"Frequently Asked Questions"}
        text={
          "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        }
        rightContentType={"title-button"}
      />
    </CommonQuestionsWrapper>
  );
}

export default CommonQuestions;
