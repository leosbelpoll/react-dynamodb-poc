import React, { Fragment } from "react";

export default function JobListItem({ job, selected, toogleSelectedJob }) {
  function showModalDetail() {
    alert("sdsdsd");
  }

  return (
    <tr className={selected && "table-success"}>
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
        <a href="#" onClick={showModalDetail}>
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
