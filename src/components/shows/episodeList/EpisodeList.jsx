import { EpisodeListWrapper } from "./EpisodeList.styles";
import PropTypes from "prop-types";
import EpisodeItem from "../episodeItem/EpisodeItem";

const EpisodeList = ({ seasonNo, episodesData }) => {
  const filteredEpisodes = episodesData.filter(
    (episode) => episode.season === seasonNo
  );
  return (
    <EpisodeListWrapper className="grid">
      {filteredEpisodes?.map((episode) => (
        <EpisodeItem key={episode.id} episodeData={episode} />
      ))}
    </EpisodeListWrapper>
  );
};

export default EpisodeList;

EpisodeList.propTypes = {
  seasonNo: PropTypes.number,
  episodesData: PropTypes.array,
};
