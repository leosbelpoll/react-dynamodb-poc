import {
  GET_JOBS_FETCH,
  GET_JOBS_SUCCESS,
  GET_JOBS_ERROR,
  GET_JOB_FETCH,
  GET_JOB_SUCCESS,
  GET_JOB_ERROR,
  REMOVE_JOBS_FETCH,
  REMOVE_JOBS_SUCCESS,
  REMOVE_JOBS_ERROR,
  RETRY_JOBS_FETCH,
  RETRY_JOBS_SUCCESS,
  RETRY_JOBS_ERROR,
} from "../actions/jobActions";

const initialState = {
  jobs: [],
  currentJob: null,
  loading: false,
  loadingJobs: false,
  loadingCurrentJob: false,
  loadingRemoveJob: false,
  loadingRetryJob: false,
  error: null,
  errorJobs: null,
  errorCurrentJob: null,
  errorRemoveJob: null,
  errorRetryJob: null,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case GET_JOBS_FETCH: {
      return {
        ...state,
        loading: true,
        loadingJobs: true,
        error: null,
      };
    }
    case GET_JOBS_SUCCESS: {
      return {
        ...state,
        // TODO: get the right structure with real API, just for POC porpuse
        jobs: payload,
        loading: false,
        loadingJobs: false,
        error: null,
      };
    }
    case GET_JOBS_ERROR: {
      return {
        ...state,
        loading: false,
        loadingJobs: false,
        error: payload,
      };
    }
    case GET_JOB_FETCH: {
      return {
        ...state,
        currentJob: null,
        loading: true,
        loadingCurrentJob: true,
        errorCurrentJob: null,
      };
    }
    case GET_JOB_SUCCESS: {
      return {
        ...state,
        currentJob: payload,
        loading: false,
        loadingCurrentJob: false,
        errorCurrentJob: null,
      };
    }
    case GET_JOB_ERROR: {
      return {
        ...state,
        currentJob: null,
        loading: false,
        loadingCurrentJob: false,
        errorCurrentJob: payload,
      };
    }
    case REMOVE_JOBS_FETCH: {
      return {
        ...state,
        loading: true,
        loadingRemoveJob: true,
        errorRemoveJob: null,
      };
    }
    case REMOVE_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loadingRemoveJob: false,
        errorRemoveJob: null,
      };
    }
    case REMOVE_JOBS_ERROR: {
      return {
        ...state,
        loading: false,
        loadingRemoveJob: false,
        errorRemoveJob: payload,
      };
    }
    case RETRY_JOBS_FETCH: {
      return {
        ...state,
        loading: true,
        loadingRetryJob: true,
        errorRetryJob: null,
      };
    }
    case RETRY_JOBS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loadingRetryJob: false,
        errorRetryJob: null,
      };
    }
    case RETRY_JOBS_ERROR: {
      return {
        ...state,
        loading: false,
        loadingRetryJob: false,
        errorRetryJob: payload,
      };
    }
    default:
      return state;
  }
}
