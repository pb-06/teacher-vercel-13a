const express = require('express');
const cors = require('cors');
const app = express();

var global = {
    teachers: [
        {name: 'Gipsz Jakab', hisClass: '9/A', favorite: false},
        {name: 'Kolompár Dzsoki', hisClass: '18/C', favorite: true},
    ],
    //favouriteTeacherIdx: null,
}

app.use(cors());

// local test: GET http://localhost:3333/teachers
app.get('/teachers', (req, res)=> {
    res.status(200).json(global.teachers);
})

const port = 3333;
app.listen(port, ()=>{
    console.log('Node Express backend server starts on port', port);
});