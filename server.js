const express=require("express");  // It will load the express package in our application only once.

const port = 8040;

// Creating app object
const app=express();

// const app=require("express")();

// Route creation
app.get("/", (req, res, next) => {
    
    //res.send();
    //res.sendFile();
    //res.render();
    //res.json();

    res.send(`<h1>Hello World !!</h1>`);
})



// Time to start a server

// Callback to promise

// I am modifying my server.js

// console.log(app);

app.listen(port, () => {
    console.log(`Server Running At Port  ${port}`)
})