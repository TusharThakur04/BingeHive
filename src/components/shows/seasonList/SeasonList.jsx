import { useState } from "react";
import { selectShowsSeasons } from "../../../redux/selectors/showsSelector";
import { HeadingTitleMd } from "../../../styles/global/default";
import SeasonItem from "../seasonItem/SeasonItem";
import { SeasonListWrapper } from "./SeasonList..styles";
import { useSelector } from "react-redux";

const SeasonList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const seasonsData = useSelector(selectShowsSeasons);
  console.log(seasonsData);

  console.log(seasonsData);
  return (
    <SeasonListWrapper className="detail-block">
      <HeadingTitleMd>Seasons and Episodes</HeadingTitleMd>
      {seasonsData?.map((season) => {
        return (
          <SeasonItem
            key={season.id}
            seasonData={season}
            isActive={activeIndex === season.id}
            onShow={() => {
              activeIndex === season.id
                ? setActiveIndex(0)
                : setActiveIndex(season.id);
            }}
          />
        );
      })}
    </SeasonListWrapper>
  );
};

export default SeasonList;
