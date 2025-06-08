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

// fetch all shows
export const fetchAllShows = createAsyncThunk(
  "fetch/shows/all",
  async (_, thunkAPI) => {
    try {
      return await showsService.fetchAllShows();
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

// fetch searched show
export const fetchShow = createAsyncThunk(
  "fetch/shows/search",
  async (query, thunkAPI) => {
    try {
      return await showsService.fetchShow(query);
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

//fetch show details

export const fetchShowDetails = createAsyncThunk(
  "fetch/shows/single",
  async (showid, thunkAPI) => {
    try {
      thunkAPI.dispatch(showsSlice.actions.resetSingleShowData);
      return await showsService.fetchShow(showid);
    } catch (error) {
      return handleError(error, thunkAPI);
    }
  }
);

const initialState = {
  shows: [],
  searchResult: [],
  showDetail: null,
  isLoading: {
    fetchAllShows: false,
    fetchShow: false,
    fetchShowDetails: false,
  },
  isSuccess: {
    fetchAllShows: false,
    fetchShow: false,
    fetchShowDetails: false,
  },
  isError: {
    fetchAllShows: false,
    fetchShow: false,
    fetchShowDetails: false,
  },
  error: null,
};

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {
    resetFetchData: (state) => {
      state.searchResult = [];
    },

    resetSingleShowData: (state) => {
      state.showDetail = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllShows.pending, (state) => {
        state.isError.fetchAllShows = false;
        state.isLoading.fetchAllShows = true;
        state.isSuccess.fetchAllShows = false;
      })
      .addCase(fetchAllShows.rejected, (state, action) => {
        state.error = action.payload;
        state.isError.fetchAllShows = true;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = false;
      })
      .addCase(fetchAllShows.fulfilled, (state, { payload }) => {
        state.isError.fetchAllShows = false;
        state.isLoading.fetchAllShows = false;
        state.isSuccess.fetchAllShows = true;
        state.shows = payload;
      })
      .addCase(fetchShow.pending, (state) => {
        state.isError.fetchShow = false;
        state.isLoading.fetchShow = true;
        state.isSuccess.fetchShow = false;
      })
      .addCase(fetchShow.rejected, (state, action) => {
        state.isError.fetchShow = true;
        state.isLoading.fetchShow = false;
        state.isSuccess.fetchShow = false;
        state.error = action.payload;
      })
      .addCase(fetchShow.fulfilled, (state, { payload }) => {
        state.searchResult = payload;
        state.isError.fetchShow = false;
        state.isLoading.fetchShow = false;
        state.isSuccess.fetchShow = true;
      })
      .addCase(fetchShowDetails.pending, (state) => {
        state.isError.fetchShowDetails = false;
        state.isLoading.fetchShowDetails = true;
        state.isSuccess.fetchShowDetails = false;
      })
      .addCase(fetchShowDetails.rejected, (state, action) => {
        state.error = action.payload;
        state.isError.fetchShowDetails = true;
        state.isLoading.fetchShowDetails = false;
        state.isSuccess.fetchShowDetails = false;
      })
      .addCase(fetchShowDetails.fulfilled, (state, { payload }) => {
        state.isError.fetchShowDetails = false;
        state.isLoading.fetchShowDetails = false;
        state.isSuccess.fetchShowDetails = true;
        state.showDetail = payload;
      });
  },
});

export const { resetFetchData } = showsSlice.actions;
export default showsSlice.reducer;
