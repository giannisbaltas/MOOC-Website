const express = require('express');
const app = express();

console.log(__dirname);

app.post('/register', function(req,res) {
    res.send('User registered');
})

app.post('/api/register', function(req,res) {
    res.status(201).send()
})

app.post('/api/login', function(req,res) {
    res.status(201).send()
})

app.listen("5500");