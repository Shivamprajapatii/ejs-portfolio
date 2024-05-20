const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Project = require("./models/project.js");
const { data } = require("./init/projectData.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const session = require("express-session");



const MONGO_URL = "mongodb://127.0.0.1:27017/portfolio";

main().then(() => {
    console.log("Database Connected");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const sessionOption = {
    secret : "MysuperSecretKey",
    resave : false,
    saveUninitialized : true,
}


app.use("/assets", express.static("assets"));   // For Acssessing Local Images
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(session(sessionOption));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware Test

// Login 

app.get("/singup",(req,res) => {
    res.render("user/signup.ejs");
})

app.post("/signup", async(req,res) => {
    try{
        let {username,email,password} = req.body;
        let newUser = new User({username,email});
        let registerUser =  await User.register(newUser,password);
        console.log(registerUser);
        res.redirect("/home");
    } catch(e) {
        res.redirect("/signup");
    }
  
});

app.get("/login",(req,res) => {
    res.render("user/login.ejs");
})
// Home Page Route

app.get("/home",async(req,res) => {
   let projectData = await Project.find({});
    res.render("index",{projectData}); 
});

// Perticular Project Ka Full Information
app.get("/project/:id",async (req,res) => {
    let {id} = req.params;
    let projectInfo = await Project.findById(id);
    res.render("projects/show.ejs",{projectInfo});
});



// Add New Project Route
app.get("/projects/new",(req,res) => {
    res.render("projects/new.ejs");
});

// form Submit hone Ke bad POST Data Jayega Toh Uske liye Route
app.post("/projects",async(req,res) => {
    // let {title,link,description} =  req.body;     either do this way or create a Project object inside key and value pair  objrct name 
    // is project form me project Diya hun
    let newProject =new Project(req.body.project);
    newProject.save();
    res.redirect("/home");   
});

// Edit Route 
app.get("/projects/:id/edit",async(req,res) => {
    let {id} = req.params;
    let projectInfo = await Project.findById(id);
    res.render("projects/edit.ejs",{projectInfo});
});

// Update route Ke liye PUT
app.put("/projects/:id",async(req,res) => {
    let {id} = req.params;
    await Project.findByIdAndUpdate(id,{...req.body.project});
    res.redirect(`/project/${id}`);
});

// Delete Route
app.delete("/projects/:id",async(req,res) => {
    let {id} = req.params;
    let deletedProject = await Project.findByIdAndDelete(id);
    console.log(deletedProject);
    res.redirect("/home");
});

app.post("/projects/:id/play",async(req,res) => {
    let {id} = req.params;
    if(id=="65fe2700651bd91234d799df"){
       res.send("Hello Air BNB");
    }
    else if(id == "65fe2700651bd91234d799e1") {
        res.render("ProjectsActivity/CameraClick.ejs");
    }
    else if(id == "65fe2700651bd91234d799e2") {
        res.render("ProjectsActivity/simon.ejs");
    }
    else if(id == "65fe2700651bd91234d799e3"){
        res.render("ProjectsActivity/todo.ejs");
    }

    else if(id == "66349799de1a5a3854f9000c") {
        res.render("ProjectsActivity/amazon.ejs")
    }
    else if(id == "6634dd1c52e3a2c302e7bd8b") {
        res.render("ProjectsActivity/Spotify.ejs")
    }
    else{
        res.send("wrong Details");
    }
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})


app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.use("*", (req, res) => {
    res.send("Page Note Found");
})

const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
    console.log(`App Is Lisining to Port ${port}`);
})


