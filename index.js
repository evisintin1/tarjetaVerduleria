const express = require('express');
const app = express();
const ejs=require('ejs');
const hostname = '127.0.0.1';
const path=require('path');
const port = 2500;

app.set("views",path.join(__dirname,"views"));
app.use(express.static("ejs"));

app.set('view engine','ejs');

app.listen(port,()=>{
    console.log("Servidor corriendo");
})

app.get('/puerto', (req, res) => {
    res.render("prueba.ejs",{'mensaje':'servidor corriendo en'});
  });