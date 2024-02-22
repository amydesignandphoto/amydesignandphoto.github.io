import React from "react";
import { MediaQueryContextProvider } from "./MediaQueryContext";

export const ContextProviders = ({ children }: ChildProps) => {
    return <MediaQueryContextProvider>{children}</MediaQueryContextProvider>;
};
