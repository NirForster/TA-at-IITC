const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors")
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express();

const PORT = 3000;
const saltRounds = 10;
const hashKey = "PeogG3lBZpSErxuBgrAA0Y6ermcD04XGGeTn7uUYfLvOFEvdaW";

const dummyUser = {};

// Middle
dotenv.config()
app.use(express.json());
app.use(cors());

// Connect To mongoDB
mongoose.connect(process.env.DB_URI).then(()=> {
  console.log("Succefully Connected to DB");
})

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from the server!",
  });
});


app.post("/sign-up", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(userPassword);

    const hashedPassword = await bcrypt.hash(password + hashKey, saltRounds);

    dummyUser.email = email;
    dummyUser.password = hashedPassword;

    return res.send({
      you: dummyUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;

    // You task to first find the user in the DB

    // Check the Email:
    if (dummyUser.email !== email) {
      return res.status(401).send("NO SUCH USER");
    }

    const isCorrectPassword = await bcrypt.compare(
      password + hashKey,
      dummyUser.password
    );

    if (isCorrectPassword) {
      return res.status(200).send({
        status: "success",
        message: "Welcome",
        data: dummyUser.email,
      });
    } else {
      return res.status(401).send({
        error: "Error",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
