import JobModel from "../../dynamoose/models/jobModel";

export const getJobs = async () => {
  return await JobModel.scan().exec();
};

export const getJob = async (id) => {
  return await JobModel.get(id);
};

export const removeJobs = async (ids) => {
  return await JobModel.batchDelete(ids);
};

export const updateJobs = async (jobs) => {
  return await JobModel.batchPut(jobs);
};
