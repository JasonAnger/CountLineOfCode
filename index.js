const express = require('express')
const fs = require('fs');
const sloc = require('node-sloc')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')))
app.get('/slocpath=*', async (req, res) =>{
    const options = {
        path: `${req._parsedOriginalUrl.path.slice(10)}/`,                      // Required. The path to walk or file to read.
        ignorePaths: [`${req._parsedOriginalUrl.path.slice(10)}/node_modules`],       // A list of directories to ignore.
        ignoreDefault: false,                // Whether to ignore the default file extensions or not
        //logger: console.log,                 // Optional. Outputs extra information to if specified.
    }
    const result = await sloc(options)
    res.send(result)
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))