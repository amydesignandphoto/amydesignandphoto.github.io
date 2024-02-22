import React from "react";
import MainLogos from "./components/MainLogos";
import MainMenuImageLinks from "./components/MainMenuImageLinks";
import { useMediaQueryContext } from "./context/MediaQueryContext";
import { DesktopMainLogos } from "./components/DesktopMainLogos";

const Home = () => {
    const { isDesktop } = useMediaQueryContext();

    return (
        <>
            {isDesktop ? <DesktopMainLogos /> : <MainLogos />}
            <MainMenuImageLinks />
        </>
    );
};

export default Home;
