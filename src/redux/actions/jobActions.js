import AWS from "aws-sdk";
import { getEnv } from "../../utils/env";

export const GET_JOBS_FETCH = "GET_JOBS_FETCH";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const GET_JOB_FETCH = "GET_JOB_FETCH";
export const GET_JOB_SUCCESS = "GET_JOB_SUCCESS";
export const GET_JOB_ERROR = "GET_JOB_ERROR";

const awsConfig = {
  version: "2011-12-05",
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: getEnv("AWS_ACCESS_KEY_ID"),
  secretAccessKey: getEnv("AWS_SECRET_ACCESS_KEY"),
};

AWS.config.update(awsConfig);

const dynamoClient = new AWS.DynamoDB.DocumentClient();

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
  return (dispatch) => {
    dispatch(getJobsFetch());
    dynamoClient.scan(
      {
        TableName: "jobs",
      },
      function (error, data) {
        if (error) {
          dispatch(getJobsError(error));
        } else {
          dispatch(getJobsSuccess(data.Items));
        }
      }
    );
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
  return (dispatch) => {
    dispatch(getJobFetch());
    dynamoClient.scan(
      {
        TableName: "jobs",
        Key: {
          id
        }
      },
      function (error, data) {
        if (error) {
          dispatch(getJobError(error));
        } else {
          dispatch(getJobSuccess(data));
        }
      }
    );
  };
};
