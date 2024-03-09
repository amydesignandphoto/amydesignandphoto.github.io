import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const MOBILE = 480;
const TABLET = 1000;

type MediaQueryContextType = {
    isDesktop: boolean;
    isTabletOrLarger: boolean;
};

const MediaQueryContext = createContext<MediaQueryContextType>({
    isDesktop: window.innerWidth > MOBILE,
    isTabletOrLarger: window.innerWidth > TABLET,
});

export const MediaQueryContextProvider = ({ children }: ChildProps) => {
    const isDesktop = useMediaQuery({
        query: `(min-width: ${MOBILE}px)`,
    });
    const isTabletOrLarger = useMediaQuery({
        query: `(min-width: ${TABLET}px)`,
    });
    return (
        <MediaQueryContext.Provider value={{ isDesktop, isTabletOrLarger }}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export const useMediaQueryContext = () =>
    useContext(MediaQueryContext) || { isDesktop: false };
