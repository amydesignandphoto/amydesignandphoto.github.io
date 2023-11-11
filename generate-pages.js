const fs = require('fs')

// read the template file
const template = fs.readFileSync('template.html').toString()

// read the config file
const config = JSON.parse(fs.readFileSync('./config.json').toString())

// delete all the html files from the docs folder
// note: forEach might try and do things async and I'd rather keep things sync for this so I'm using map
fs.readdirSync('./docs').map(item => {
    if (item.endsWith('.html')) fs.unlinkSync('./docs/' + item)
})

// loop over the pages in the config file
config.pages.map(page => {
    const injectedTemplate = template.replace(
        '// GLOBALS',
        `const PAGE_ID = '${page.id}'; 
const config = ${JSON.stringify(config)};`
    )
    fs.writeFileSync(`./docs/${page.id}.html`, injectedTemplate)
})
