import PropTypes from "prop-types";
import { EpisodeItemWrapper } from "./EpisodeItem.styles";

const EpisodeItem = ({ episodeData }) => {
  return (
    <EpisodeItemWrapper>
      <div></div>
    </EpisodeItemWrapper>
  );
};

export default EpisodeItem;

EpisodeItem.propTypes = {
  episodeData: PropTypes.object,
};
