import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8011;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hi We have running webapp on container v1" });
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
