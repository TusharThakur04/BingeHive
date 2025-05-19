import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import showsService from "../services/showsService";
import errorConstants from "../../constants/errorConstants";

const handleError = (error, thunkAPI) => {
  if (error.response) {
    const { status, data } = error.response;
    let code = null;
    if (status === 404) {
      code = errorConstants.ERR_404;
    } else if (status === 429) {
      code = errorConstants.ERR_429;
    }

    return thunkAPI.rejectWithValue({
      code,
      message: data.message,
    });
  } else if (error.request) {
    return thunkAPI.rejectWithValue({
      code: error.code,
      message: "Network Error",
    });
  }

  return thunkAPI.rejectWithValue({
    code: "ERR_GENERIC",
    message: "Error",
  });
};

export const fetchAllShows = createAsyncThunk(
  "fetch/all/shows",
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows();
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

const initialState = {
  shows: [],
  isLoading: {
    fetchAllShows: false,
  },
  isSuccess: {
    fetchAllShows: false,
  },
  isError: {
    fetchAllShows: false,
  },
  error: null,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isError.fetchAllShows = false;
        state.isLoading.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.isError.fetchAllShows = true;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = false;
        state.error = action.payload;
      })
      .addCase(fetchAllShows.fulfilled, (state, { payload }) => {
        state.isError.fetchAllShows = false;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = true;
        state.shows = payload;
      });
  },
});

export default showsSlice.reducer;
