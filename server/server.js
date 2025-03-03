import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import express from "express";

import { EmployeeRouter } from "./src/employees/employees.controller.js";

const PORT = process.env.PORT || 4200;
const app = express();

async function manin() {
  app.use(express.json());
  app.use(cors());

  app.use("/api/employees", EmployeeRouter);

  app.get("/", (req, res) => {
    res.send("Hello World, my name is Zhakyp");
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

manin();
