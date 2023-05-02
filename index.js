const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req, res)=>{
    res.send('hello chefs');
})
app.listen(port, ()=>{
    console.log(`our local port is ${port}`);
})