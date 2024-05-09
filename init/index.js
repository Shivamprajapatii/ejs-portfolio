const mongoose = require("mongoose");
const initData = require("./projectData");
const Project = require("../models/project.js");


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

const initDB = async() => {
    await Project.deleteMany({});

    await Project.insertMany(initData.data);
    console.log("Data Was Initilized");
}

// initDB();

