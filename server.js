// Importing Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Handling GET Requests
app.get('/',(req,res)=>{
    res.send ('Hell Vithoo!!!');
});

// Handling POST Requests
app.post('/resourses:id', (req,res)=>{
    const {name} = req.body;
    res.status(201).json({ message: `Created resourses with name ${name}`})

})

// Starting the Server
app.listen(3001,()=>{
    console.log('Server started on port 3001');
});




