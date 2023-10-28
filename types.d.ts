declare const PAGE_ID: string
type PageConfig = {
    id: string
    title: string
    images: string[]
}

type Config = {
    pages: Page[]
}

declare const config: Config
