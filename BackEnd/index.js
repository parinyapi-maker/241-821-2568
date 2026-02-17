const exppress = require('express');
const bodyParser = require('body-parser');
const app = exppress();

const port = 8000;

app.use(bodyParser.json());
let users =[]
let counter = 1;

//path = /test
app.get('/test',(req,res) => {

    //let users = {
    //    name: 'John Doe',
    //    age: 30,
    //    email: 'johndoe@example.com'
    //}

    res.json(user);
});

//path = POST /user
app.post('/user',(req,res) => {
    let user = req.body;
    users.id(user);
    counter += 1;
    users.push(user);
    res.json({
        message: "User added successfully",
        user: user });
    })

    //path = PUT /user/:id
    app.put('/user/:id',(req,res) => {
        let id = req.params.id;

        //user จาก id ที่ส่งมา
        let seledIndex = users.findIndex(user => user.id == id);

        //อัพเดตข้อมูล user
        if (updatedUser.name) {
            users[seletedIndex].name = updatedUser.name;
        }
        if (updatedUser.email) {
            users[seletedIndex].email = updatedUser.email;
        }

        users[seletedIndex] = {
            ...users[seletedIndex],
            name: updatedUser.name || users[seletedIndex].name,
            email: updatedUser.email || users[seletedIndex].email
        };

        //ส่งข้อมูล update ส่ง response กลับไป
        res.json({
            message: 'User updated successfully',
            data:{
                user: updatedUser,
                indexUpdated: seletedIndex
            }
        })
        res.send(seletsdIndex + '');
        res.send(id);
    })
    //path DELETE /user/:id
    app.delete('/user/:id',(req,res) => {
        let id = req.params.id;
        //หา index ของ user ที่ต้องลบ
        let seletedIndex = users.findIndex(user => user.id == id);
        //ลบ user ออกจาก array โดยใช้ delete
        users.splice(seletedIndex, 1);

        res.json({
            message: 'User deleted successfully',
            indexDeleted: seletedIndex
        })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

