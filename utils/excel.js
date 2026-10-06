const XLSX = require('xlsx')
const fs   = require('fs');
const path = require('path')


function saveToExcel(data) {

const workbook = XLSX.utils.book_new()
const worksheet = XLSX.utils.json_to_sheet([data])
XLSX.utils.book_append_sheet(
workbook,
worksheet,
'Prices'

);

const dataDir = path.join(__dirname, '..', 'data')
fs.mkdirSync(dataDir, { recursive: true })
XLSX.writeFile(workbook, path.join(dataDir, 'dataprice.xlsx'))

}


module.exports = { saveToExcel }


