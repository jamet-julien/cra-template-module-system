const reducers = {};

export const registerReducer = (name, reducer) => {
    if (reducers[name]) return false;
    reducers[name] = reducer;
    return true;
};

export const getReducers = () => {
    return reducers;
};
