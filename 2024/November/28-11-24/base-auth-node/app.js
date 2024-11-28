const express = require("express");
const bcrypt = require("bcrypt");

const app = express();

const PORT = 3000;
const saltRounds = 10;
const hashKey = "PeogG3lBZpSErxuBgrAA0Y6ermcD04XGGeTn7uUYfLvOFEvdaW"

const dummyUser = {

}

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello from the server!",
  });
});

app.post("/sign-up", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(userPassword);

    const hashedPassword = await bcrypt.hash(userPassword + hashKey, saltRounds);

    return res.send({
      hashedPassword,
    });

  } catch (error) {
    res.status(500).send(error)
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
