const fs = require("fs");

const CONFIG_PATH = "./config.json";
const TEMPLATE_PATH = "./src/template.html";
const OUTPUT_DIR_PATH = "./docs";
const TEMPLATE_REPLACEABLE_STRING = "// GLOBALS";

// read the template file
const template = fs.readFileSync(TEMPLATE_PATH).toString();

// read the config file
const config = JSON.parse(fs.readFileSync(CONFIG_PATH).toString());

// do some checks on the config and throw errors if failed
config.pages.map((page) => {
    if (page.id === "index") {
        throw new Error('!!AMY!! You can\'t name a page "index"');
    }
    if (page.id.split(" ").length > 1) {
        throw new Error("!!AMY!! You can't have spaces in a page ID");
    }
});

// get all page ids
const pageIds = config.pages.map((page) => page.id);
const set = new Set(pageIds);
if (pageIds.length !== set.size) {
    throw new Error("!!AMY!! You can't have multiple pages with the same ID");
}

// delete all the html files from the output folder
// note: forEach might try and do things async and I'd rather keep things sync for this so I'm using map
fs.readdirSync(OUTPUT_DIR_PATH).map((item) => {
    if (item.endsWith(".html")) fs.unlinkSync(`${OUTPUT_DIR_PATH}/${item}`);
});

// after Error checks and cleaning up the html files
// generate a new home page as index.html and an about page.
const aboutTemplate = template.replace(
    TEMPLATE_REPLACEABLE_STRING,
    generateTemplateToReplace("about")
);

const homeTemplate = template.replace(
    TEMPLATE_REPLACEABLE_STRING,
    generateTemplateToReplace("home")
);

fs.writeFileSync(`${OUTPUT_DIR_PATH}/index.html`, homeTemplate);
fs.writeFileSync(`${OUTPUT_DIR_PATH}/about.html`, aboutTemplate);
// template to replace
function generateTemplateToReplace(pageId) {
    // add pageId and the config to the page as a variable and an object
    return `const PAGE_ID = '${pageId}'; 
            const config = ${JSON.stringify(config)};`;
}

function injectConfig(pageId) {
    // generate a new page from the template
    const injectedTemplate = template.replace(
        TEMPLATE_REPLACEABLE_STRING,
        generateTemplateToReplace(pageId)
    );
    // write that out to an html file
    fs.writeFileSync(`${OUTPUT_DIR_PATH}/${pageId}.html`, injectedTemplate);
}

// loop over the pages in the config file and
config.pages.map((page) => {
    injectConfig(page.id);
});
