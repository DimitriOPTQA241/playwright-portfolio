const XLSX = require('xlsx')
const fs   = require('fs');



function saveToExcel(data) {

const workbook = XLSX.utils.book_new()
const worksheet = XLSX.utils.json_to_sheet([data])
XLSX.utils.book_append_sheet(
workbook,
worksheet,
'Prices'

);
fs.mkdirSync('data', { recursive : true})

XLSX.writeFile(
    workbook,
    './data/dataprice.xlsx'
);


}


module.exports = { saveToExcel }


