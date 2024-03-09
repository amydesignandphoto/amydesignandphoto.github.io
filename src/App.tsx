import React from "react";
import Page from "./Page";
import About from "./About";
import Home from "./Home";

const App = () => {
    const page = config.pages.find((p) => p.id === PAGE_ID);

    if (PAGE_ID === "home") return <Home />;
    else if (PAGE_ID === "about") return <About />;
    else return <Page page={page} />;
};

export default App;
