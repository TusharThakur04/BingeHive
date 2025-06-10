import { useDispatch, useSelector } from "react-redux";
import { metaData, singleShow } from "../../redux/selectors/showsSelector";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchShowDetails } from "../../redux/slices/showsSlice";
import ShowsBanner from "../../components/common/shows/ShowsBanner/ShowsBanner";
import { ClipLoader } from "react-spinners";
import { ErrorMessage } from "../../components";
import { Container } from "../../styles/global/default";
import { ShowDetailContent } from "./ShowDetailScreen.styles";
import ShowsMainData from "../../components/shows/showsMainData/ShowsMainData";

const ShowDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const showid = parseInt(id, 10);

  useEffect(() => window.scroll(0, 0));
  useEffect(() => {
    dispatch(fetchShowDetails(showid));
  }, [dispatch, showid]);

  const showDetails = useSelector(singleShow);
  const isError = useSelector((state) => state.shows.isError.fetchShowDetails);
  const isLoading = useSelector(
    (state) => state.shows.isLoading.fetchShowDetails
  );
  const error = useSelector((state) => state.shows.isLoading.fetchShowDetails);
  const details = useSelector(metaData);
  // console.log(details);
  // console.log(showDetails);

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
        <ShowDetailContent>
          <ShowsMainData />
        </ShowDetailContent>
      </Container>
    </div>
  );
};

export default ShowDetails;
