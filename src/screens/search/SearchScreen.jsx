import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, SearchBar } from "../../components";
import { ClipLoader } from "react-spinners";
import { useEffect } from "react";
import { resetFetchData } from "../../redux/slices/showsSlice";

const SearchScreen = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(resetFetchData()), [isError];
  // });
  const isError = useSelector((state) => state.shows.isError.fetchShow);
  const error = useSelector((state) => state.shows.error);
  const isLoading = useSelector((state) => state.shows.isLoading.fetchShow);

  // console.log(isError);

  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {<ClipLoader color="red" size={100} />}
      </div>
    );
  }

  // if (isError) {
  //   return <ErrorMessage error={error} />;
  // }
  return (
    <div className="top-spacing-fix">
      <SearchBar></SearchBar>
    </div>
  );
};

export default SearchScreen;
