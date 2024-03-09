import { useEffect, useState } from "react";

export const useScrollableAnimation = () => {
    const [vert, setVert] = useState(document.body.scrollTop);
    const [width, setWidth] = useState(document.body.clientWidth);

    const updateData = () => {
        setVert(document.body.scrollTop);
        setWidth(document.body.clientWidth);
        console.log(document.body.scrollTop);
        console.log(document.body.clientWidth);
    };
    const onEvent = () => {
        requestAnimationFrame(updateData);
    };
    useEffect(() => {
        document.body.addEventListener("scroll", onEvent);
        addEventListener("resize", onEvent);
        return () => {
            document.body.removeEventListener("scroll", onEvent);
            removeEventListener("resize", onEvent);
        };
    }, []);

    return { vert, width };
};
