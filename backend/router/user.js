import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  sags,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser
  .get("/", getAllUser)
  .post("/", createUser)
  .post("/login", login)
  .get("sags", sags);
routerUser.route("/:id").delete(deleteUser).get(getUser);

export default routerUser;
