import React from "react";
import { connect } from "react-redux";

function JobDetail({ jobsState }) {
  const { currentJob, loadingCurrentJob, errorCurrentJob } = jobsState;
  function retryJob(job) {
    alert(`Retrying job: ${job.title}`);
  }

  return (
    <div
      className="modal fade"
      id="jobDetailModal"
      tabIndex="-1"
      aria-labelledby="jobDetailModalLabel"
      aria-hidden="false"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        {loadingCurrentJob && <ModalHeader title="... Loading selected job" />}
        {errorCurrentJob && <ModalHeader title="Ooops: Error getting" />}
        {currentJob && (
          <div className="modal-content">
            <ModalHeader title={`Job: ${currentJob.title}`} />
            <div className="modal-body">
              <form>
                <div className="row mb-4">
                  <div className="col">
                    <label htmlFor="jobId" className="form-label">
                      Id
                    </label>
                    <input
                      className="form-control-plaintext"
                      readOnly
                      value={currentJob.id}
                      id="jobId"
                      aria-describedby="jobIdHelp"
                    />
                    <div id="jobIdHelp" className="form-text">
                      Job identifier
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="jobStatus" className="form-label">
                      Status
                    </label>
                    <input
                      className="form-control-plaintext"
                      readOnly
                      value={currentJob.completed ? "Completed" : "Pending"}
                      id="jobStatus"
                      aria-describedby="jobStatusHelp"
                    />
                    <div id="jobStatusHelp" className="form-text">
                      Job status
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col">
                    <label htmlFor="jobDefinition" className="form-label">
                      Definition
                    </label>
                    <input
                      className="form-control-plaintext"
                      readOnly
                      value={324234}
                      id="jobDefinition"
                      aria-describedby="jobDefinitionHelp"
                    />
                    <div id="jobDefinitionHelp" className="form-text">
                      Job definition
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="jobStartedAt" className="form-label">
                      Started at
                    </label>
                    <input
                      className="form-control-plaintext"
                      readOnly
                      value={324234}
                      id="jobStartedAt"
                      aria-describedby="jobStartedAtHelp"
                    />
                    <div id="jobStartedAtHelp" className="form-text">
                      Job started time
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              {!currentJob.completed && (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => retryJob(currentJob)}
                >
                  Retry
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ModalHeader({ title }) {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jobsState: state.jobsState,
  };
};

export default connect(mapStateToProps)(JobDetail);
