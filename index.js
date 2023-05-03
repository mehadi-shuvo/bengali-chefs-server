const express = require('express');
const chefs = require('./data/chefs.json');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());
app.get('/',(req, res)=>{
    res.send('hello chefs');
})
app.get('/chefs', (req, res)=>{
    res.send(chefs);

})
app.listen(port, ()=>{
    console.log(`our local port is ${port}`);
})