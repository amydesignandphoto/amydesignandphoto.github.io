declare const PAGE_ID: string;

type PageConfig = {
    id: string;
    title: string;
    paragraphs: string[];
    images: string[];
};

type Config = {
    pages: Page[];
};

declare const config: Config;
