import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getJobsAction,
  removeJobsAction,
} from "../../redux/actions/jobActions";
import PageTitle from "../parts/PageTitle";
import JobListItem from "./JobListItem";
import JobDetail from "./JobDetail";
import {
  addErrorNotification,
  addSuccessNotification,
} from "../../utils/notifications";

function JobList({ jobsState, getJobsAction, removeJobsAction }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("any");
  const [selectedJobs, setSelectedJobs] = useState([]);

  useEffect(() => {
    getJobsAction();
  }, []);

  const { jobs, error } = jobsState;

  const visibleJobs = jobs.filter(isJobVisible);

  function isJobVisible(job) {
    const includeTitleFilter = job.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    if (statusFilter !== "any")
      return includeTitleFilter && job.status === statusFilter;

    return includeTitleFilter;
  }

  function isSelectedJob(job) {
    return selectedJobs.find((j) => j.id === job.id);
  }

  function toogleSelectedJob(job) {
    if (isSelectedJob(job)) {
      setSelectedJobs((currentSelectedJobs) =>
        currentSelectedJobs.filter((j) => j.id !== job.id)
      );
    } else {
      setSelectedJobs((currentSelectedJobs) => [...currentSelectedJobs, job]);
    }
  }

  function retryJobs() {
    alert(`Retrying jobs: ${selectedJobs.map((job) => job.title).toString()}`);
  }

  function removeJobs() {
    const removeJobsConfirmation = window.confirm("Are you sure?");
    if (removeJobsConfirmation) {
      try {
        removeJobsAction(selectedJobs);
        addSuccessNotification("Jobs removes successfuly");
      } catch (error) {
        addErrorNotification("Oops: Error removing jobs");
      }
    }
  }

  return (
    <div>
      <PageTitle title="Job list" />
      <JobDetail />
      {error && <span>An error ocurred loading jobs</span>}
      {jobs && !error && (
        <Fragment>
          <div className="row g-2 mt-4 mb-4">
            <div className="col-sm-12 col-md-5 col-lg-3 offset-lg-4">
              <input
                className="form-control"
                id="titleFilter"
                placeholder="Title"
                value={titleFilter}
                onChange={(e) => setTitleFilter(e.target.value)}
              />
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3">
              <select
                className="form-select"
                id="statusFilter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="any">Any status</option>
                <option value="Processed">Processed</option>
                <option value="Processing">Processing</option>
                <option value="Queued">Queued</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <div className="col-2">
              <div className="btn-group" role="group">
                <button
                  id="btnGroupDrop1"
                  type="button"
                  className="btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Bash Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <li>
                    <a
                      className={`dropdown-item ${
                        !selectedJobs.length && "disabled"
                      }`}
                      href="#"
                      onClick={retryJobs}
                    >
                      Retry jobs
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${
                        !selectedJobs.length && "disabled"
                      }`}
                      href="#"
                      onClick={() => removeJobs()}
                    >
                      Remove jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span>
            Showing {visibleJobs.length} from {jobs.length}
          </span>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectedJobs.length === jobs.length}
                    onChange={() => {
                      if (selectedJobs.length !== jobs.length) {
                        setSelectedJobs([...jobs]);
                      } else {
                        setSelectedJobs([]);
                      }
                    }}
                  />
                </th>
                <th scope="col">ID</th>
                <th scope="col">User id</th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visibleJobs.map((job) => (
                <JobListItem
                  job={job}
                  key={job.id}
                  selected={isSelectedJob(job)}
                  toogleSelectedJob={toogleSelectedJob}
                />
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobsState: state.jobsState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getJobsAction: () => dispatch(getJobsAction()),
    removeJobsAction: (jobs) => {
      const ids = jobs.map((job) => job.id);
      dispatch(removeJobsAction(ids));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
