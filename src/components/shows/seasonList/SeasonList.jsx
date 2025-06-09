import { selectShowsSeasons } from "../../../redux/selectors/showsSelector";
import { HeadingTitleMd } from "../../../styles/global/default";
import SeasonItem from "../seasonItem/SeasonItem";
import { SeasonListWrapper } from "./SeasonList..styles";
import { useSelector } from "react-redux";

const SeasonList = () => {
  const seasonsData = useSelector(selectShowsSeasons);
  console.log(seasonsData);
  return (
    <SeasonListWrapper className="detail-block">
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonsData?.map((season) => {
        return <SeasonItem key={season.id} seasonData={season} />;
      })}
    </SeasonListWrapper>
  );
};

export default SeasonList;
