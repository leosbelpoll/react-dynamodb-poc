import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getJobAction, removeJobAction } from "../../redux/actions/jobActions";

function JobListItem({ job, selected, toogleSelectedJob, getJob, removeJob }) {
  function getJobDetails(job) {
    getJob(job.id);
  }

  return (
    <tr className={selected && "table-secondary"}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toogleSelectedJob(job)}
        />
      </td>
      <th scope="row">{job.id}</th>
      <td>{job.userId}</td>
      <td>
        <a
          href="#"
          onClick={() => getJobDetails(job)}
          data-bs-toggle="modal"
          data-bs-target="#jobDetailModal"
        >
          {job.title}
        </a>
      </td>
      <td>
        {job.completed ? (
          <span className="badge bg-success">Completed</span>
        ) : (
          <span className="badge bg-warning">Pending</span>
        )}
      </td>
      <td>
        <div className="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Actions
          </button>
          <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
            {job.completed ? (
              <Fragment>
                <li>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li>
                  <a className="dropdown-item" href="#">
                    Retry
                  </a>
                </li>
              </Fragment>
            )}
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => removeJob(job.id)}
              >
                Remove
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => getJobDetails(job)}
                data-bs-toggle="modal"
                data-bs-target="#jobDetailModal"
              >
                Detail
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getJob: (id) => dispatch(getJobAction(id)),
    removeJob: (id) => dispatch(removeJobAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(JobListItem);
