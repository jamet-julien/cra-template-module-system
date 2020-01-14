import { registerReducer } from "../../Helpers/registerReducer";
import reducer from "./reducers";
import components from "./components";

export const install = () => {
    registerReducer("counter", reducer);
};

export default components;
