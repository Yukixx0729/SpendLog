import express, { Application } from "express";
require("dotenv").config();
const app: Application = express();
const PORT: number = 3000;
const cors = require("cors");

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
