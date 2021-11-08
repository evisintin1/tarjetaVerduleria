const express = require('express');
const app = express();
const ejs=require('ejs');
const hostname = '127.0.0.1';
<<<<<<< Updated upstream
const port = 2500;

app.set("views",path.join(__dirname,"views"));
app.use(express.static((path.join(__dirname,"pub"))))
=======
const path=require('path');
const port = 2500;

app.set("views",path.join(__dirname,"views"));
app.use(express.static("ejs"));

app.set('view engine','ejs');
>>>>>>> Stashed changes

app.listen(port,()=>{
    console.log("Servidor corriendo");
})

app.get('/puerto', (req, res) => {
<<<<<<< Updated upstream
    res.send('Servidor corriendo en el puerto:' + port)
=======
    res.render("prueba.ejs",{'mensaje':'servidor corriendo en'});
>>>>>>> Stashed changes
  });