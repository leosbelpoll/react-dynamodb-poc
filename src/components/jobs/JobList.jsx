import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getJobsAction } from "../../redux/actions/jobActions";
import PageTitle from "../parts/PageTitle";
import JobListItem from "./JobListItem";

function JobList({ jobsState, getJobsAction }) {
  const [titleFilter, setTitleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState();
  const [selectedJobs, setSelectedJobs] = useState([]);

  useEffect(() => {
    getJobsAction();
  }, []);

  const { jobs, loading, error } = jobsState;

  const visibleJobs = jobs.filter(isJobVisible);

  function isJobVisible(job) {
    const includeTitleFilter = job.title.includes(titleFilter);

    if (statusFilter === "completed")
      return includeTitleFilter && job.completed;
    if (statusFilter === "pending") return includeTitleFilter && !job.completed;
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

  return (
    <div>
      <PageTitle title="Job list" />
      {loading && <span>... Loading jobs</span>}
      {error && <span>An error ocurred loading jobs</span>}
      {jobs && !error && (
        <Fragment>
          <div className="row g-2">
            <div className="col-sm-12 col-md-5 col-lg-3 offset-lg-4">
              <div className="form-floating">
                <input
                  className="form-control"
                  id="titleFilter"
                  placeholder="Title"
                  value={titleFilter}
                  onChange={(e) => setTitleFilter(e.target.value)}
                />
                <label htmlFor="titleFilter">Title</label>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 col-lg-3">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="statusFilter"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>Select the status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
                <label htmlFor="statusFilter">Status</label>
              </div>
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
                    <a className="dropdown-item" href="#">
                      Retry jobs
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
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
                    onClick={() => {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobList);
