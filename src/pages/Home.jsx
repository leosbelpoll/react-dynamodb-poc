import React from "react";
import PageTitle from "../components/parts/PageTitle";

export default function Home() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <PageTitle title="React Discovery PoC" />
        <div className="row">
          <div className="col-sm-6">
            <div className="card card-body">
              <div className="row pt-2 pb-2">
                <div className="col pr-0">
                  <h1 className="font-weight-light">86</h1>
                  <h6 className="text-muted">New Clients</h6>
                </div>

                <div className="col text-right align-self-center">
                  <div
                    data-label="20%"
                    className="css-bar mb-0 css-bar-primary css-bar-20"
                  >
                    <span className="material-icons">bug_report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card card-body">
              <div className="row pt-2 pb-2">
                <div className="col pr-0">
                  <h1 className="font-weight-light">248</h1>
                  <h6 className="text-muted">All Projects</h6>
                </div>

                <div className="col text-right align-self-center">
                  <div
                    data-label="30%"
                    className="css-bar mb-0 css-bar-danger css-bar-20"
                  >
                    <span className="material-icons">done_outline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mt-4">
            <div className="card card-body">
              <div className="row pt-2 pb-2">
                <div className="col pr-0">
                  <h1 className="font-weight-light">352</h1>
                  <h6 className="text-muted">New Items</h6>
                </div>

                <div className="col text-right align-self-center">
                  <div
                    data-label="40%"
                    className="css-bar mb-0 css-bar-warning css-bar-40"
                  >
                    <span className="material-icons">help_outline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mt-4">
            <div className="card card-body">
              <div className="row pt-2 pb-2">
                <div className="col pr-0">
                  <h1 className="font-weight-light">159</h1>
                  <h6 className="text-muted">Invoices</h6>
                </div>

                <div className="col text-right align-self-center">
                  <div
                    data-label="60%"
                    className="css-bar mb-0 css-bar-info css-bar-60"
                  >
                    <span className="material-icons">settings_power</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
