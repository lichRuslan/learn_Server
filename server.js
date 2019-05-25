let express = require('express');
let app = express();
let users = [
    {id : 1, name : "Ruslan"},
    {id : 2, name : "Tamerlan"},
    {id : 3, name : "Alexander"},
    {id : 4, name : "Kairat"},
    {id : 5, name : "Jirgal"}
];
app.get('/', (req,res)=>{
    res.send('Hello');
});
app.get('/users', (req,res)=>{
    res.send(users);
});
app.get('/users/:id', (req,res)=>{
    console.log(req.params);
    let user = users.find((user)=>{
        return user.id === Number(req.params.id);
    });
    if(user) res.send(user);
    else res.send('К сожилению такого пользователя нет');
});
app.listen(3000, ()=>{
    console.log('SERVER START');
});