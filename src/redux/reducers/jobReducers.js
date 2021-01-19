import {
  GET_JOBS_FETCH,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOB_FETCH,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
} from "../actions/jobActions";

const initialState = {
  jobs: [],
  currentJob: null,
  loading: false,
  loadingCurrentJob: false,
  error: null,
  errorCurrentJob: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_JOBS_FETCH: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        // TODO: get the right structure with real API, just for POC porpuse
        jobs: payload,
        loading: false,
        error: null,
      };
    }
    case GET_JOBS_ERROR: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    case GET_JOB_FETCH: {
      return {
        ...state,
        currentJob: null,
        loadingCurrentJob: true,
        errorCurrentJob: null,
      };
    }
    case GET_JOB_SUCCESS: {
      return {
        ...state,
        currentJob: payload,
        loadingCurrentJob: false,
        errorCurrentJob: null,
      };
    }
    case GET_JOB_ERROR: {
      return {
        ...state,
        currentJob: null,
        loadingCurrentJob: false,
        errorCurrentJob: payload,
      };
    }
    default:
      return state;
  }
}
