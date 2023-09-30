const xlsx = require('xlsx');
const mysql = require('mysql2');


const workbook = xlsx.readFile('vish.xlsx');
const sheetName = workbook.SheetNames[0];
const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

console.log(sheetData);
const connection = mysql.createConnection({
  host: 'localhost',    
  user: 'root',  
  password: 'Vishesh@123',  
  database: 'excel' 
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  

 
   
  sheetData.forEach((row) => {
    console.log('row',row);
    //const query = 'INSERT INTO  Excel (name, age, address , dob) VALUES (row.name, row.age, row.address , row.dob)';
    const query = `INSERT INTO  Excel (name, age, address) VALUES ('${row.Name}', ${row.Age}, '${row.Address}')`;
    const values = [row.name, row.age, row.address , row.dob]; 
    

    connection.query(query, values, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted:', result);
    });
  });

 
    
  
//      for (const row of excelData) {
//         const connection = await pool.promise().getConnection();
//        const insertQuery = 'INSERT INTO Excel SET ?';
//        await connection.query(insertQuery, row);
//        connection.release();
//       }
  connection.end((err) => {
    if (err) {
      console.error('Error closing connection:', err);
      return;
    }
    console.log('Connection closed');
  });
});
