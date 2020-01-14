const action = {
    INCREMENT: (state, _) => ({ ...state, count: state.count + 1 }),
    DECREMENT: (state, _) => ({ ...state, count: state.count - 1 }),
    default: (state, _) => state
};
const reducer = (state = { count: 0 }, { type, payload }) =>
    (action[type] || action.default)(state, payload);

export default reducer;
