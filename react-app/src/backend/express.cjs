const express = require('express');
const app = express();

app.get('/teachers', (req, res)=> {
    // TODO - implement GET /teachers
    res.sendStatus(200);
})

const port = 3333;
app.listen(port, ()=>{
    console.log('Node Express backend server starts on port ', port);
});