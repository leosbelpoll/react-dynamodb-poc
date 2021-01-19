import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getJobAction } from "../../redux/actions/jobActions";

function JobListItem({
  job,
  selected,
  toogleSelectedJob,
  setDetailedJob,
  getJobAction,
}) {
  function getJobDetails(job) {
    getJobAction(job.id);
    setDetailedJob(job)
  }

  return (
    <tr className={selected && "table-secondary"}>
      <td>
        <input
          type="checkbox"
          checked={selected}
          onClick={() => toogleSelectedJob(job)}
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
                <li>
                  <a className="dropdown-item" href="#">
                    Remove
                  </a>
                </li>
              </Fragment>
            )}
            <li>
              <a className="dropdown-item" href="#">
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
    getJobAction: (id) => dispatch(getJobAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(JobListItem);
