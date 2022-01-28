const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.", "A friend asks only for your time not your money.", "All will go well with your new project.",
  "Allow compassion to guide your decisions."];
  
  let random = Math.floor(Math.random() * fortune.length);
  let randomFortunes = fortunes[random];
  
  res.status(200).send(randomFortunes);
  
});

const {
  getCars,
  createCar,
  updateCar,
  deleteCar
} = require('cars/')


app.get("/api/cars", (req, res) => {
  let cars = ['Hummer', 'H1', "20000", "2000", id]
  res.status(200).send(cars)
})


app.listen(4000, () => console.log("Server running on 4000"));










