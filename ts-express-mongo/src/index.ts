import express from "express";
import { fetchAllfromMongoDb } from "./api/db/index.js";
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  fetchAllfromMongoDb();
  res.send("Data fetched");
  console.log("message sent");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
