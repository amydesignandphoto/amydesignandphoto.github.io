import React from "react";
import MainLogos from "./components/MainLogos";
import MainMenuImageLinks from "./components/MainMenuImageLinks";
import { useMediaQueryContext } from "./context/MediaQueryContext";
import { DesktopMainLogos } from "./components/DesktopMainLogos";
import HomePageHeader from "./components/HomePageHeader";
import { useScrollableAnimation } from "./useScrollableAnimation";

const Home = () => {
  const { isDesktop } = useMediaQueryContext();
  const animationParams = useScrollableAnimation();
  return (
    <>
      <HomePageHeader {...animationParams} />
      {isDesktop ? (
        <DesktopMainLogos {...animationParams} />
      ) : (
        <MainLogos {...animationParams} />
      )}
      <MainMenuImageLinks />
    </>
  );
};

export default Home;
