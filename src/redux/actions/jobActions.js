import JobModel from "../../dynamoose/models/jobModel";

export const GET_JOBS_FETCH = "GET_JOBS_FETCH";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const GET_JOB_FETCH = "GET_JOB_FETCH";
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_ERROR = "GET_JOB_ERROR";

export const REMOVE_JOB_FETCH = "REMOVE_JOB_FETCH";
export const REMOVE_JOB_SUCCESS = "REMOVE_JOB_SUCCESS";
export const REMOVE_JOB_ERROR = "REMOVE_JOB_ERROR";

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
      const jobs = await JobModel.scan().exec();
      dispatch(getJobsSuccess(jobs));
    } catch (error) {
      dispatch(getJobsError(error));
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
      const job = await JobModel.get(id);
      dispatch(getJobSuccess(job));
    } catch (error) {
      dispatch(getJobError(error));
    }
  };
};

// Remove job

export const removeJobFetch = () => ({
  type: REMOVE_JOB_FETCH,
});

export const removeJobSuccess = () => ({
  type: REMOVE_JOB_SUCCESS,
});

export const removeJobError = (error) => ({
  type: REMOVE_JOB_ERROR,
  payload: error,
});

export const removeJobAction = (id) => {
  return async (dispatch) => {
    dispatch(removeJobFetch());
    try {
      await JobModel.delete(id);
      dispatch(removeJobSuccess());
      dispatch(getJobsAction());
    } catch (error) {
      dispatch(removeJobError(error));
    }
  };
};
