import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllShows } from "../../redux/slices/showsSlice";
import { ErrorMessage } from "../../components";
import { ShowsList } from "../../components";
import { allShows } from "../../redux/selectors/showsSelector";

const ShowScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAllShows());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.shows.isLoading.fetchAllShows);
  const isError = useSelector((state) => state.shows.isError.fetchAllShows);
  const error = useSelector((state) => state.shows.error);

  const allShowData = useSelector(allShows);
  // console.log(allShowData);

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
        {<ClipLoader color="red" size={80} />}
      </div>
    );
  }
  if (isError) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div>
      {allShowData?.length > 0 && (
        <ShowsList showsData={allShowData} showsTitle={"All Shows"} />
      )}
    </div>
  );
};

export default ShowScreen;
