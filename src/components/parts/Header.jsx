import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header({ jobsState }) {
  const { loading } = jobsState;

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React DynamoDB API POC
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/dash">
                  Dummy Dash
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="progress rounded-0" style={{ height: "5px" }}>
        <div
          className={`progress-bar bg-dark  progress-bar-animated ${
            loading && "progress-bar-striped"
          }`}
          role="progressbar"
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: "100%" }}
        ></div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    jobsState: state.jobsState,
  };
};

export default connect(mapStateToProps)(Header);
