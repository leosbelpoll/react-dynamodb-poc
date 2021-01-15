import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRouter from "./components/routes/PrivateRouter";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <PrivateRouter />
      </Router>
    </Provider>
  );
}

export default App;
