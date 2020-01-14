import * as counter from "./Counter";

const ConfModule = {
    counter
};

export default () => {
    return Promise.all(Object.values(ConfModule).map(mod => mod.install()));
};
