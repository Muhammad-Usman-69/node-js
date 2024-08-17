import express from "express"
import path from "path";
import { fileURLToPath } from "url"
import mongoose from "mongoose";
import { dumdum } from "./models/data.js";

const fileName = fileURLToPath(import.meta.url) // getting current file
const dirname = path.dirname(fileName); // getting dir path

const conn = await mongoose.connect('mongodb://127.0.0.1:27017/dumdum');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile("./templates/index.html", { root: dirname })
})

app.post('/', async (req, res) => {
  // deleting previous data
  await dumdum.deleteMany({});

  // creating dummy data
  const names = ["Taha", "Butt", "Qureshi"];
  const jobs = ["Front End", "Back End", "UI/UX", "App Developer"];
  const cities = ["Lahore", "Karachi", "Islamabad", "Multan"];

  // looping
  for (let i = 0; i < 10; i++) {
    // taking singular data
    const name = names[Math.floor(Math.random() * names.length)];
    const salary = Math.round(Math.random() * 100000);
    const job = jobs[Math.floor(Math.random() * jobs.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    const isManager = Math.round(Math.random()) ? true : false;

    // saving dara
    const data = new dumdum({ name, salary, job, city, isManager });
    data.save();
  }

  res.send("ho gya save")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})