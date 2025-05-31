import { createSelector } from "reselect";
import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../constants/showsConstants";

export const allShows = (state) => state.shows.shows || [];

const sortShowsByType = (type) => {
  return createSelector([allShows], (shows) => {
    if (type === HIGH_RATED_SHOWS) {
      return [...shows].sort((a, b) => b.rating.average - a.rating.average);
    } else if (type === NEW_SHOWS) {
      return [...shows].sort(
        (a, b) => new Date(b.premiered) - new Date(a.premiered)
      );
    }
    return shows;
  });
};

export const selectSortedHighRatedShows = sortShowsByType(HIGH_RATED_SHOWS);
export const selectSortedNewShows = sortShowsByType(NEW_SHOWS);
