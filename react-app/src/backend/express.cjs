const express = require('express');
const app = express();

var global = {
    teachers: [
        {name: 'Gipsz Jakab', hisClass: '9/A', favourite: false},
        {name: 'Kolompár Dzsoki', hisClass: '18/C', favourite: true},
    ],
    //favouriteTeacherIdx: null,
}

// local test: GET http://localhost:3333/teachers
app.get('/teachers', (req, res)=> {
    res.status(200).json(global.teachers);
})

const port = 3333;
app.listen(port, ()=>{
    console.log('Node Express backend server starts on port', port);
});