import React from "react";
import { createStore, combineReducers } from "redux";
import { getReducers } from "../Helpers/registerReducer";
import { Provider } from "react-redux";

const DataProvider = ({ children }) => {
    const store = createStore(combineReducers(getReducers()), {});
    return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
