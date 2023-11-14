import React from "react";
import FullImageLink from "./FullImageLink";

const MainMenuImageLinks = () => (
    <>
        {config.home.links.map((props) => (
            <FullImageLink {...props} />
        ))}
    </>
);

export default MainMenuImageLinks;
