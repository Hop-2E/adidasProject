import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser);

export default routerUser;
