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
app.get("/chefs/:id", (req, res)=>{
    const id = req.params.id;
    const chef = chefs.find(ch=> parseInt(ch.id) === parseInt(id));
    res.send(chef);
})
app.listen(port, ()=>{
    console.log(`our local port is ${port}`);
})