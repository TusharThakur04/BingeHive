import { useDispatch, useSelector } from "react-redux";
import { singleShow } from "../../redux/selectors/showsSelector";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchShowDetails } from "../../redux/slices/showsSlice";
import ShowsBanner from "../../components/common/shows/ShowsBanner/ShowsBanner";
import { ClipLoader } from "react-spinners";
import { ErrorMessage } from "../../components";
import { Container } from "postcss";
import { ShowDetailContent } from "./ShowDetailScreen.styles";

const ShowDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const showid = parseInt(id, 10);
  // console.log(id, showid);
  const showDetails = useSelector(singleShow);
  useEffect(() => window.scroll(0, 0));
  useEffect(() => {
    dispatch(fetchShowDetails(showid));
  }, [dispatch, showid]);
  console.log(showDetails);

  const isError = useSelector((state) => state.shows.isError.fetchShowDetails);
  const isLoading = useSelector(
    (state) => state.shows.isLoading.fetchShowDetails
  );
  const error = useSelector((state) => state.shows.isLoading.fetchShowDetails);
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
    <div className="pg-show-detail">
      {showDetails && <ShowsBanner showsData={showDetails} />}

      <Container>
        <ShowDetailContent></ShowDetailContent>
      </Container>
    </div>
  );
};

export default ShowDetails;
