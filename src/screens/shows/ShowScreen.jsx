import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllShows } from "../../redux/slices/showsSlice";
const ShowScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllShows());
  }, []);

  const isLoading = useSelector((state) => {
    state.shows.isLoading.fetchAllShows;
  });
  const isError = useSelector((state) => {
    state.shows.isError.fetchAllShows;
  });
  const error = useSelector((state) => {
    state.shows.error;
  });

  // if (isLoading) {
  //   return (
  //     <div
  //       style={{
  //         height: "100vh",
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       {!isLoading && <ClipLoader color="red" size={80} />}
  //     </div>
  //   );
  // } else if (isError) {
  //   return <div>{error}</div>;
  // }

  return <div></div>;
};

export default ShowScreen;
