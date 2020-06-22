const csvjson = require('csvjson')
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, 'customer-data.xls'), {encoding: 'utf-8'}, (error, data) => {
    if (error) {
        return console.error('The error is: ', error)
    }
    //console.log(data)
    const jsonObj = csvjson.toObject(data)
    const result = JSON.stringify(jsonObj, null, 2)
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), result)
})
