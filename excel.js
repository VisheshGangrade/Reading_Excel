const Excel = require('exceljs');

const workbook = new Excel.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');


worksheet.columns = [
  { header: 'sr.', key: 'sr', width: 5 },
  { header: 'Name', key: 'name', width: 20 },
  { header: 'Age', key: 'age', width: 10 },
  { header: 'Address', key: 'address', width: 30 },
  { header: 'DateofBirth', key: 'dateOfBirth', width: 15 }
];


const data = [
  { sr: 1, name: 'Vishesh Gangrade', age: 22, address: '123 Main St', dateOfBirth: '2000-08-26' },
  { sr: 2, name: 'Sawan Patel', age: 23, address: '456 Elm St', dateOfBirth: '2000-08-20' },
  { sr: 3, name: 'Rohit Pawar', age: 23, address: '256 Elm St', dateOfBirth: '2000-04-20' },
  { sr: 4, name: 'Pushpendra Sir', age: 29, address: 'Khandwa', dateOfBirth: '21-05-2021' },
  { sr: 5, name: 'Abc', age: 23, address: 'Ab  Road', dateOfBirth: '20-08-2000' },
];
worksheet.addRows(data);


workbook.xlsx.writeFile('vish.xlsx')
  .then(function() {
    console.log('Excel file created successfully.');
    //console.log('All set for the display');
  })
  .catch(function(error) {
    console.error('Error creating Excel file:', error);
  });
