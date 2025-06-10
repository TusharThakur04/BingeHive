import { useSelector } from "react-redux";
import { Paragraph } from "../../../styles/global/default";
import { MainDataWrapper } from "./ShowsMainData.styles";
import { selectShowDescription } from "../../../redux/selectors/showsSelector";
import SeasonList from "../seasonList/SeasonList";

const ShowsMainData = () => {
  const descriptionData = useSelector(selectShowDescription);
  return (
    <MainDataWrapper>
      <SeasonList />
      <div className="detail-block show-description">
        <h4 className="detail-block-title">Description</h4>
        <Paragraph
          className="text-white"
          dangerouslySetInnerHTML={{
            __html: descriptionData,
          }}
        ></Paragraph>
      </div>
    </MainDataWrapper>
  );
};

export default ShowsMainData;
