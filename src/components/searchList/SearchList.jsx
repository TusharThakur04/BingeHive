import ShowsList from "../common/shows/ShowsList/ShowsList";
import { SearchListWrapper } from "./SearchList.styles";
import PropTypes from "prop-types";

const SearchList = ({ showData }) => {
  const searchedShows = showData.map((searchedShow) => searchedShow.show);
  return (
    <SearchListWrapper>
      <ShowsList showsData={searchedShows} showsTitle="Search Result" />
    </SearchListWrapper>
  );
};

export default SearchList;

SearchList.propTypes = {
  showData: PropTypes.array,
};
