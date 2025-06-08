import { useDispatch, useSelector } from "react-redux";
import { singleShow } from "../../redux/selectors/showsSelector";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchShowDetails } from "../../redux/slices/showsSlice";
import ShowsBanner from "../../components/common/shows/ShowsBanner/ShowsBanner";

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

  return (
    <div className="pg-show-detail">
      {showDetails && <ShowsBanner showsData={showDetails} />}
    </div>
  );
};

export default ShowDetails;
