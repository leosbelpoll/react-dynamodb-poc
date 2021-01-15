import { combineReducers } from "redux";

import jobReducers from "./jobReducers";

export default combineReducers({ jobsState: jobReducers });
