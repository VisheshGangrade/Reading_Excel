//  const express = require('express');
//  const multer = require('multer');
//  const xlsx = require('xlsx');
//  const mysql = require('mysql2');

//  const app = express();
//  const port = 3000;


//  const storage = multer.memoryStorage();
//  const upload = multer({ storage: storage });


//   const dbConfig = {
//    host: 'localhost',
//    user: 'root',
//    password: 'Vishesh@123',
//    database: 'excel'
//  };


//  const pool = mysql.createPool(dbConfig);


//  app.get('/upload', upload.single('vish.xlsx'), async (req, res) => {
//    try {
    
//      const workbook = xlsx.readFile('.vish.xlsx'); 
//      const worksheet = workbook.Sheets[workbook.SheetNames];
//      const excelData = xlsx.utils.sheet_to_json(worksheet_list[0]);
//    console.log(excelData)
     
//      for (const row of excelData) {
//         const connection = await pool.promise().getConnection();
//        const insertQuery = 'INSERT INTO Excel SET ?';
//        await connection.query(insertQuery, row);
//        connection.release();
//       }

//       res.status(200).json({ message: 'Data inserted successfully.' });
//      } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'An error occurred.' });
//     }
//  });


//  app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });

