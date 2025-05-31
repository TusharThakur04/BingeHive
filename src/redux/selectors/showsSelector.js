import { createSelector } from "reselect";

export const allShows = (state) => state.shows.shows || [];
