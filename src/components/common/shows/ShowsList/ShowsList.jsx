import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShowsListWrapper } from "./ShowsList.styles";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "../../../../styles/global/default";
import ShowsItem from "../ShowsItem/ShowsItem";
import {
  DEFAULT_SHOWS,
  HIGH_RATED_SHOWS,
  NEW_SHOWS,
} from "../../../../constants/showsConstants";

const ShowsList = ({ showsData, showsTitle }) => {
  useEffect(() => {
    console.log(currentShows);
    console.log("hi");
  }, []);
  const [currentPage, setcurrentPage] = useState(1);

  const showsPerPage = 40;
  const lastIndex = currentPage * showsPerPage;
  const firstIndex = lastIndex - showsPerPage;
  const currentShows = showsData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(showsData.length / showsPerPage);
  // console.log(currentShows);

  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />
      <Container>
        <div className="shows-list grid">
          {currentShows?.map((show) => (
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS} />
          ))}
        </div>
      </Container>
    </ShowsListWrapper>
  );
};

export default ShowsList;

ShowsList.propTypes = {
  showsData: PropTypes.array.isRequired,
  showsTitle: PropTypes.string.isRequired,
};
