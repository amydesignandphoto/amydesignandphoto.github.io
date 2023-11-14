declare const PAGE_ID: string;

type Link = {
    img: string;
    text: string;
    linksTo: string;
};

type HomeConfig = {
    links: Link[];
};

type AboutConfig = {
    image: string;
    paragraphs: string[];
};

type PageConfig = {
    id: string;
    title: string;
    paragraphs: string[];
    images: string[];
};

type Config = {
    home: HomeConfig;
    about: AboutConfig;
    pages: Page[];
};

declare const config: Config;
