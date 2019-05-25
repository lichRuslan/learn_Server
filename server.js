let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //что парсить данные формы
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

//Добовление пользователя
app.post('/users', (req,res)=>{
    let user = {
        id: Date.now(),
        name: req.body.name
    };
    users.push(user);
    res.send(user);
});
// Редактирование пользователя
app.put('/users/:id', (req,res)=>{
    let user = users.find((user)=>{
        return user.id === Number(req.params.id);
    });
    user.name = req.body.name;
    res.sendStatus(200);
});
// Удаление пользователя
app.delete('/users/:id', (req,res)=>{
    users = users.filter((user)=>{
        return user.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});

app.listen(3000, ()=>{
    console.log('SERVER START');
});