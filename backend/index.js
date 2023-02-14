import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router/items.js";
dotenv.config();
const uri = process.env.MONGO_URI || "";
const port = process.env.PORT || 7000;
const app = express();
const corsOption = {
  origin: "http://localhost:3000",
  optionSuccesStatus: 200,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/items", router);

const connect = () => {
  mongoose
    .connect(uri, {})
    .then(() => {
      console.log("connected to DB");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

app.listen(port, async () => {
  console.log(`app running ${port}`);
  connect();
});
