const express=require("express");  // It will load the express package in our application only once.

const path=require("path");

const cors=require("cors");
const { engine } = require("express/lib/application");

const port = 8040;

// Creating app object
const app=express();

app.use(cors());

// const app=require("express")();

app.use(express.json());   // For json data  // App level Middleware  // bodyParser // For json data

app.use(express.urlencoded({extended:false}));  // Middleware 2 // For x-www-form-urlencoded data

app.use(express.static("public")); // This is use for serving static resources like html/ css/ JS/ images/ videos

// Route creation
app.get("/", (req, res, next) => {
    
    //res.send(); ----> res.write + res.end();
    //res.sendFile();
    //res.render();
    //res.json();

    // res.send("Hello World")
    // res.send("<h1>Hello World !!</h1>"); //html as well

    res.send({
        name:"Brajeswar",
        age:24
    })
})


// Query Parameter Example
app.get("/user", (req, res, next) => {

    // Two different kinds of get request parameters 
    
    //Query param // Query string
    // Path param
    
    console.log(req.query);
    // const name=req.query.name
    // const age=req.query.age
    // const address=req.query.address

    const {name,age,address}=req.query;


    // res.send("Hey User")

    res.send(`hey ${name} you are ${age} years old and you live in ${address}`)
})


// Path params
// Route params

app.get("/admin/:data/:name", function(req,res){
    console.log(req.params.data);

    const paramData=req.params.data;
    const name=req.params.name;


    res.send(paramData + name);
})

app.get("/admin/:data?/:name?", function(req,res){
    // console.log(req.params.data);

    // const paramData=req.params.data;
    // const name=req.params.name;


    // res.send(paramData + name);
    res.send("Hey There")
})

app.get("/html", (req,res) => {

    // console.log(__dirname);

    // console.log(process.argv);

    // console.log(path);

    const filePath = path.join(__dirname + "/views/home.html") // The absolute path of my file

    res.sendFile(filePath);

})


app.post("/postroute", (req,res) => { 

    console.log(req.body); // For post request you will receive data in req.body

    ///
    

    // res.json("This is a post route");

    res.json(req.body);

})


app.get("/album", (req,res) => {


    const filePath = path.join(__dirname + "/views/album.html") // The absolute path of my file

    const heading="My new page" // This can be anything ---> It can be something which you are geeting from Database

    res.sendFile(filePath);

})

// Template engine -->

app.get("/template",(req,res)=>{

    const menuitems=[
        "About Us",
        "Login",
        "Signup",
        "Contact"
    ]
    let html=""

 menuitems.forEach(ele=>(
     html+=`   <li class="nav-item">
     <a class="nav-link active" aria-current="page" href="#">${ele}</a>
   </li>`


    ))

    res.send(`
    
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          ${html}
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>`)
 })



// Time to start a server

// Two types of Template Engine
// Handle Brs
// EJS

// Callback to promise

// I am modifying my server.js

// console.log(app);

app.listen(port, () => {
    console.log(`Server Running At Port  ${port}`)
})
