const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')

const filename = 'customer-data.xls'

csvtojson().fromFile(path.join(__dirname, filename)).then((jsonObj) => {
    const data = JSON.stringify(jsonObj, null, 2)
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), data)
})
