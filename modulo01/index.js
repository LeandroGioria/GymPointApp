const express = require('express');

const server = express();
server.use(express.json());

// Query param = ?teste=
    //const name = req.query.name;
// Route params = /users/1
    //const { id } = req.params;
// Request body = { "name" : "Leandro"}

const users = ['Leandro', 'Alana', 'Bruna', 'Nice', 'Celso'];

//Middleware global
server.use((req, res, next) => {
    console.time('Request');
    console.log(`Método: ${req.method}, URL: ${req.url}`);

    next();

    console.timeEnd('Request');
});

//Middlewares locais
function checkUsersExists(req, res, next){
    if (!req.body.name) {
        return res.status(400).json({ 'error' : 'User name is required'});
    }
    
    return next();
}

function isValidId(req, res, next){
    const { id } = req.params;
    if(!users[id])
        return res.status(400).json({ 'error' : 'Users does not exists'});
        
    return next();
}

// localhost:3000
server.get('/users', (req, res) => {
    return res.json(users);
});

server.get('/users/:id', isValidId, (req, res) => {
    const { id } = req.params;

    return res.json(users[id]);
});

server.post('/user', checkUsersExists, (req, res) => {
    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/user/:id', isValidId, checkUsersExists, (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    users[id] = name

    return res.json(users);
});

server.delete('/user/:id', isValidId, (req, res) => {
    const { id } = req.params;

    users.splice(id, 1);

    return res.json(users);
});

server.listen(3000);