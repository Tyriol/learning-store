import express from "express";
import { addPostToMongoDb } from "./api/db/index.js";
const app = express();
const PORT = process.env.PORT ?? 3000;

addPostToMongoDb();

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("message sent");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
