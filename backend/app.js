// import List from "./config.js";

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// app.set("view engine", "ejs");
// Replace This with whatever alternate code u have to use

app.get("/", (req,res)=>{
    res.send("Welcome to the server")
});

app.post("/create/todo", (req,res)=>{
    //Code to create Todo item
    
});

app.get("/get/all/todo", (req,res)=>{
    //Code to get all items
    
});

app.put("/update/todo", (req,res)=>{
    //Code to update an item
    
});
app.delete("/delete/todo", (req,res)=>{
    //Code to delete an item
    
});

app.listen(port, ()=>{
    console.log(`server is running of ${port}`);
});
