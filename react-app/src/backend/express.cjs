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

// GET /teacher/:is-favorite
app.get('/teacher/:isfavorite', (req, res)=>{
    const found = global.teachers.find(teacher=>teacher.favorite);
    
    // instead of find bug:
    /*
    let found = null;
    for (let teacher of global.teachers) {
        console.log('teacher', teacher);
        if (teacher.favorite) {
            found = teacher;
        }
    }
    */

    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

const port = 3333;
app.listen(port, ()=>{
    console.log('Node Express backend server starts on port', port);
});