const express = require('express');
const app = express();
const ejs=require('ejs');
const hostname = '127.0.0.1';
const port = 2500;

app.set("views",path.join(__dirname,"views"));
app.use(express.static((path.join(__dirname,"pub"))))
app.listen(port,()=>{
    console.log("Servidor corriendo");
})

app.get('/puerto', (req, res) => {
    res.send('Servidor corriendo en el puerto:' + port)
  });