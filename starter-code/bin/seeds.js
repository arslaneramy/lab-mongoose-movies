require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose.connect(`mongodb://localhost/celebrities`);

const celebrities = [
  {
    name: "Rick Sanchez",
    ocupattion: "Scientist",
    catchPhrase: "wubba lubba dub dub",
  },
  {
    name: "Morty Smith",
    ocupattion: "Student",
    catchPhrase: "Oh Geez",
  },
  {
    name: "Jerry Smith",
    ocupattion: "Unenployed",
    catchPhrase: "I'm a looser",
  },
];

Celebrity.create(celebrities)
  .then((response) => {
    console.log(`${response.length} celebrities seeded in the DB`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(`there has been an error:`, err));
