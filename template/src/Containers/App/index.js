import React from "react";
import DataProvider from "../../Store";
import "./App.css";
import Counter from "../../Modules/Counter";

function App() {
    return (
        <DataProvider>
            <Counter />
        </DataProvider>
    );
}

export default App;
