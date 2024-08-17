//https://mongoosejs.com/docs/

import mongoose from "mongoose";
import express from "express";
import { logs } from "./models/logs.js";

let conn = await mongoose.connect("mongodb://localhost:27017/logs");
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const strTime = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();

    // creating log and saving it in mongoose
    const log = new logs({time: strTime}); 
    log.save();

    res.send('Hello World!')
})

app.get('/read', async (req, res) => {
    const data = await logs.find({});
    console.log(data)
    res.json(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
