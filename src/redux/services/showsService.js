import axios from "axios";
import urlConstants from "../../constants/urlConstants";

const fetchAllShows = async () => {
  const res = await axios.get(urlConstants.fetchShowsUrl);
  // console.log(res.data);
  return res.data;
};

const showsService = {
  fetchAllShows,
};

export default showsService;
