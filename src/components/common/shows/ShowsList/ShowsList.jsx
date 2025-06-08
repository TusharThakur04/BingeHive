import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ShowsListWrapper } from "./ShowsList.styles";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "../../../../styles/global/default";
import ShowsItem from "../ShowsItem/ShowsItem";
import { DEFAULT_SHOWS } from "../../../../constants/showsConstants";
import { PaginationWrapper } from "./Pagination.styles";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const ShowsList = ({ showsData, showsTitle }) => {
  const [currentPage, setcurrentPage] = useState(1);

  const showsPerPage = 36;
  const lastIndex = currentPage * showsPerPage;
  const firstIndex = lastIndex - showsPerPage;
  const currentShows = showsData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(showsData.length / showsPerPage);
  // console.log(currentShows);

  const nextPage = () => {
    currentPage < totalPages && setcurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    currentPage > 1 && setcurrentPage((prev) => prev - 1);
  };
  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />

      <Container>
        <div className="shows-list grid">
          {currentShows?.map((show) => (
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS} />
          ))}
        </div>
        <PaginationWrapper>
          <div className="flex pages justify-center items-center">
            <NavigateBeforeIcon onClick={prevPage} />
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (page, index) => (
                <div
                  onClick={() => setcurrentPage(index + 1)}
                  className={` page flex justify-center items-center ${currentPage === index + 1 && "current"}`}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  {page}
                </div>
              )
            )}
            <NavigateNextIcon onClick={nextPage} />
          </div>
        </PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  );
};

export default ShowsList;

ShowsList.propTypes = {
  showsData: PropTypes.array.isRequired,
  showsTitle: PropTypes.string.isRequired,
};
