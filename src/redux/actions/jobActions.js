const API_URL = process.env.REACT_APP_API_URL;
const JOBS_URL = API_URL + "/jobs";

export const GET_JOBS_FETCH = "GET_JOBS_FETCH";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const GET_JOB_FETCH = "GET_JOB_FETCH";
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_ERROR = "GET_JOB_ERROR";

export const REMOVE_JOBS_FETCH = "REMOVE_JOB_FETCH";
export const REMOVE_JOBS_SUCCESS = "REMOVE_JOB_SUCCESS";
export const REMOVE_JOBS_ERROR = "REMOVE_JOB_ERROR";

export const RETRY_JOBS_FETCH = "RETRY_JOB_FETCH";
export const RETRY_JOBS_SUCCESS = "RETRY_JOB_SUCCESS";
export const RETRY_JOBS_ERROR = "RETRY_JOB_ERROR";

// Get jobs

export const getJobsFetch = () => ({
  type: GET_JOBS_FETCH,
});

export const getJobsSuccess = (jobs) => ({
  type: GET_JOBS_SUCCESS,
  payload: jobs,
});

export const getJobsError = (error) => ({
  type: GET_JOBS_ERROR,
  payload: error,
});

export const getJobsAction = () => {
  return async (dispatch) => {
    dispatch(getJobsFetch());
    try {
      const response = await fetch(JOBS_URL);
      const jobs = await response.json();
      dispatch(getJobsSuccess(jobs));
    } catch (error) {
      dispatch(getJobsError(error));
      throw new Error(error);
    }
  };
};

// Get job details

export const getJobFetch = () => ({
  type: GET_JOB_FETCH,
});

export const getJobSuccess = (job) => ({
  type: GET_JOB_SUCCESS,
  payload: job,
});

export const getJobError = (error) => ({
  type: GET_JOB_ERROR,
  payload: error,
});

export const getJobAction = (id) => {
  return async (dispatch) => {
    dispatch(getJobFetch());
    try {
      const response = await fetch(JOBS_URL + "/" + id);
      const job = await response.json();
      dispatch(getJobSuccess(job));
    } catch (error) {
      dispatch(getJobError(error));
      throw new Error(error);
    }
  };
};

// Remove job

export const removeJobsFetch = () => ({
  type: REMOVE_JOBS_FETCH,
});

export const removeJobsSuccess = () => ({
  type: REMOVE_JOBS_SUCCESS,
});

export const removeJobsError = (error) => ({
  type: REMOVE_JOBS_ERROR,
  payload: error,
});

export const removeJobsAction = (ids) => {
  return async (dispatch) => {
    dispatch(removeJobsFetch());
    try {
      const response = await fetch(JOBS_URL, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          ids,
        }),
      });
      await response.json();
      dispatch(removeJobsSuccess());
      dispatch(getJobsAction());
    } catch (error) {
      dispatch(removeJobsError(error));
      throw new Error(error);
    }
  };
};

export const removeJobAction = (id) => {
  return (dispatch) => {
    try {
      dispatch(removeJobsAction([id]));
    } catch (error) {
      throw new Error(error);
    }
  };
};

// Retry job

export const retryJobsFetch = () => ({
  type: RETRY_JOBS_FETCH,
});

export const retryJobsSuccess = () => ({
  type: RETRY_JOBS_SUCCESS,
});

export const retryJobsError = (error) => ({
  type: RETRY_JOBS_ERROR,
  payload: error,
});

export const retryJobsAction = (jobs) => {
  return async (dispatch) => {
    dispatch(retryJobsFetch());
    try {
      const response = await fetch(JOBS_URL, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          jobs,
        }),
      });
      await response.json();
      dispatch(retryJobsSuccess());
      dispatch(getJobsAction());
    } catch (error) {
      dispatch(retryJobsError(error));
    }
  };
};

export const retryJobAction = (job) => {
  return (dispatch) => dispatch(retryJobsAction([job]));
};
