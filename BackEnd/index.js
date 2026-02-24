const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();

const port = 8000;

app.use(bodyParser.json());
let users =[]
let counter = 1;

let conn = null;
const initDBConnection = async () => {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root', 
            database: 'webdb',
            port: 8821
        });
};

app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})
// app.get('/testdb-new', async (req, res) => { 
//     try {
//         const tempConn = await mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: 'root',
//             database: 'webdb', 
//             port: 8821
//         });

//         const [results] = await tempConn.query('SELECT * FROM users');
//         await tempConn.end(); // ควรปิด connection ทุกครั้งที่สร้างใหม่
//         res.json(results); // ส่ง results ทั้งหมด
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Database query error' });
//     }
// });


// //path = /test
// app.get('/test',(req,res) => {

//     //let users = {
//     //    name: 'John Doe',
//     //    age: 30,
//     //    email: 'johndoe@example.com'
//     //}

//     res.json(users);
// });

//path = POST /user
app.post('/users',async (req,res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('results:', results);
    res.json({
        message:"User created successfully",
        data: results[0]
    })
});


    // let user = req.body;
    // users.id(user);
    // counter += 1;
    // users.push(user);
    // res.json({
    //     message: "User added successfully",
    //     user: user });
    // })

    //path = PUT /user/:id
    // app.put('/user/:id', (req, res) => {
    // let id = req.params.id;
    // let updatedUser = req.body;

    //     //user จาก id ที่ส่งมา
    //     let selectedIndex = users.findIndex(user => user.id == id);

    //     //อัพเดตข้อมูล user
    //     if (updatedUser.name) {
    //         users[selectedIndex].name = updatedUser.name;
    //     }
    //     if (updatedUser.email) {
    //         users[selectedIndex].email = updatedUser.email;
    //     }

    //     users[selectedIndex] = {
    //         ...users[selectedIndex],
    //         name: updatedUser.name || users[selectedIndex].name,
    //         email: updatedUser.email || users[selectedIndex].email
    //     };

    //     //ส่งข้อมูล update ส่ง response กลับไป
    //     res.json({
    //         message: 'User updated successfully',
    //         data:{
    //             user: updatedUser,
    //             indexUpdated: selectedIndex
    //         }
    //     })
    //     res.send(selectedIndex + '');
    //     res.send(id);
    // })
    //path DELETE /user/:id
//     app.delete('/user/:id', (req, res) => {
//     let id = req.params.id;
//     let selectedIndex = users.findIndex(user => user.id == id);
//     if (selectedIndex !== -1) {
//         users.splice(selectedIndex, 1);
//         res.json({
//             message: 'User deleted successfully',
//             indexDeleted: selectedIndex
//         });
//     } else {
//         res.status(404).json({
//             message: 'User not found'
//         });
//     }
// }); 

app.listen(port,async () => {
    await initDBConnection();
    console.log(`Server is running on port ${port}`);
});