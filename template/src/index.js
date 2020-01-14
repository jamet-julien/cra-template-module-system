import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import * as serviceWorker from "./Helpers/serviceWorker";

import install from "./Modules";

const render = () => {
    ReactDOM.render(<App />, document.getElementById("root"));
};

install().then(render);

serviceWorker.unregister();
