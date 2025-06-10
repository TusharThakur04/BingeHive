import { useSelector } from "react-redux";
import { Icons } from "../../../assets/icons";
import { HeadingTitleMd, Text } from "../../../styles/global/default";
import { SeasonItemWrapper } from "./SeasonItem.styles";
import PropTypes from "prop-types";
import { selectShowEpisodes } from "../../../redux/selectors/showsSelector";
import EpisodeList from "../episodeList/EpisodeList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const SeasonItem = ({ seasonData, onShow, isActive }) => {
  const episodesData = useSelector(selectShowEpisodes);

  return (
    <SeasonItemWrapper className="bg-black06">
      <div className="season-head flex items-center justify-between">
        <div className="season-head-title flex items-center flex-wrap">
          <HeadingTitleMd>Season {seasonData?.number}</HeadingTitleMd>
          <Text>{seasonData?.episodeOrder} Episodes</Text>
        </div>
        <button
          className="btn inline-flex items-center justify-center"
          onClick={onShow}
        >
          {isActive ? (
            <KeyboardArrowUpIcon className="up" />
          ) : (
            <KeyboardArrowDownIcon className="down" />
          )}
        </button>
      </div>
      <div className={`season-body ${isActive ? "show" : ""}`}>
        <div>hi</div>
        {episodesData && (
          <EpisodeList
            seasonNo={seasonData?.number}
            episodesData={episodesData}
          />
        )}
      </div>
    </SeasonItemWrapper>
  );
};

export default SeasonItem;

SeasonItem.propTypes = {
  seasonData: PropTypes.object.isRequired,
  onShow: PropTypes.func,
  isActive: PropTypes.bool,
};
