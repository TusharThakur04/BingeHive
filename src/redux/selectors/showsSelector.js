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

export const searchedShow = (state) => state.shows.searchResult || [];

export const singleShow = (state) => state.shows.showDetail || null;

export const metaData = createSelector([singleShow], (detail) => {
  if (!detail) return null;
  return {
    name: detail.name,
    officialSite: detail.officialSite,
    premiered: detail.premiered,
    ended: detail.ended,
    genres: detail.genres,
    image: detail.image,
    rating: detail.rating,
    runtime: detail.runtime,
    status: detail.status,
    language: detail.language,
    url: detail.url,
  };
});

// export const selectShowDescription = createSelector(
//   [singleShow],
//   (detail) => detail?.summary
);

export const selectShowsSeasons = createSelector(
  [singleShow],
  (detail) => detail?._embedded?.seasons
);

export const selectShowCast = createSelector(
  [singleShow],
  (detail) => detail?._embedded?.cast
);

export const selectShowEpisodes = createSelector(
  [singleShow],
  (detail) => detail?._embedded?.episodes
);
