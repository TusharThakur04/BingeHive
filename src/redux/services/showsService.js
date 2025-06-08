import axios from "axios";
import urlConstants from "../../constants/urlConstants";

const fetchAllShows = async () => {
  const res = await axios.get(urlConstants.fetchShowsUrl);
  // console.log(res.data);
  return res.data;
};

const fetchShow = async (query) => {
  const showUrl = urlConstants.searchShowsUrl + `${query}`;
  const res = await axios.get(showUrl);
  return res.data;
};

const fetchShowDetail = async (showid) => {
  const showUrl =
    urlConstants.fetchShowsUrl +
    `/${showid}` +
    urlConstants.seasonsCastEpisodesEmbed;
  const res = await axios.get(showUrl);
  return res.data;
};

const showsService = {
  fetchAllShows,
  fetchShow,
  fetchShowDetail,
};

export default showsService;
