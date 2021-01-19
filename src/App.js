import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ReactNotification from 'react-notifications-component'
import PrivateRouter from "./components/routes/PrivateRouter";
import store from "./redux/store";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <Fragment>
      <ReactNotification />
      <Provider store={store}>
        <Router>
          <PrivateRouter />
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
