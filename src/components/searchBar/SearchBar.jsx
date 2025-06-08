import { useEffect, useRef, useState } from "react";
import { SearchBarWrapper } from "./SearchBar.styles";
import { Icons } from "../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchShow, resetFetchData } from "../../redux/slices/showsSlice";
import { searchedShow } from "../../redux/selectors/showsSelector";
import SearchList from "../searchList/SearchList";
import { NotDataFound } from "..";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState(false);
  const [hasValidQuery, setHasValidQuery] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef("");
  const showData = useSelector(searchedShow);
  console.log(showData);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const isValidSearchQuery = (query) => {
    const regex = /^[\w\s\-',.?!&]+$/i;
    return regex.test(query);
  };

  const handleQuerySubmit = async (event) => {
    event.preventDefault();
    if (isValidSearchQuery(query)) {
      dispatch(resetFetchData());
      setHasValidQuery(true);
      setSearchError(false);
      dispatch(fetchShow(query));
    } else {
      setSearchError("Please enter valid show title or name.");
      setTimeout(() => {
        setSearchError(false);
      }, 3000);

      setHasValidQuery(false);
    }
  };

  const handleQueryChange = (event) => setQuery(event.target.value);

  return (
    <SearchBarWrapper>
      <div className="searchbar-top ">
        {searchError && <div className="error">{searchError}</div>}
        <form
          className="search flex justify-center items-center"
          onSubmit={handleQuerySubmit}
        >
          <div className="search-box flex">
            <div className="search-input flex justify-center items-center">
              <input
                type="text"
                placeholder="Search for TV shows ..."
                className="text-lg font-semibold"
                onChange={handleQueryChange}
                ref={inputRef}
              />
            </div>
            <button type="submit" className="search-icon ">
              <img src={Icons.Search} alt="" />
            </button>
          </div>
        </form>
      </div>
      <div className="searchbar-bottom">
        {hasValidQuery &&
          (showData && showData.length > 0 ? (
            <SearchList showData={showData} />
          ) : (
            <NotDataFound />
          ))}
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
