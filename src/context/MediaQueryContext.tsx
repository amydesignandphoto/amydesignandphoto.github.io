import React, { createContext, useContext } from "react";
import { useMediaQuery } from "react-responsive";

const MOBILE = 480;

type MediaQueryContextType = {
    isDesktop: boolean;
};

const MediaQueryContext = createContext<MediaQueryContextType>({
    isDesktop: window.innerWidth > MOBILE,
});

export const MediaQueryContextProvider = ({ children }: ChildProps) => {
    const isDesktop = useMediaQuery({
        query: `(min-width: ${MOBILE}px)`,
    });
    return (
        <MediaQueryContext.Provider value={{ isDesktop }}>
            {children}
        </MediaQueryContext.Provider>
    );
};

export const useMediaQueryContext = () =>
    useContext(MediaQueryContext) || { isDesktop: false };
