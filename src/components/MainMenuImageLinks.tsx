import React from "react";
import FullImageLink, { FullImageLinkProps } from "./FullImageLink";

const linkSettings: FullImageLinkProps[] = [
    {
        img: "uvu/banner.jpg",
        text: "UVU STATE OF THE UNIVERSITY 2022",
        linksTo: "uvu",
    },
    { img: "tom-proctor/tom1.jpg", text: "TOM PROCTOR", linksTo: "" },
    { img: "demeter/stack.png", text: "HOUSE OF DEMETER", linksTo: "" },
    { img: "blue-synergy/tile.jpg", text: "BLUE SYNERGY", linksTo: "" },
    { img: "popcorn-list/login.png", text: "POPCORN LIST", linksTo: "" },
    { img: "tron/bike.png", text: "TRON VIDEO", linksTo: "" },
    { img: "bipolar-journey/manic.png", text: "BIPOLAR JOURNEY", linksTo: "" },
    { img: "kitambaa/logo.jpg", text: "KITAMBAA", linksTo: "" },
    { img: "uvu/stage.jpg", text: "UVU DATA SUMMIT 2021", linksTo: "" },
];

const MainMenuImageLinks = () => (
    <>
        {linkSettings.map((props) => (
            <FullImageLink {...props} />
        ))}
    </>
);

export default MainMenuImageLinks;
