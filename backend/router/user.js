import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  login,
  sags,
  wishlist,
} from "../controller/user.js";

const routerUser = express.Router();

routerUser.get("/", getAllUser).post("/", createUser).post("/login", login);
routerUser.route("/:id").delete(deleteUser).get(getUser);
routerUser.route("/sags/:id").put(sags);
routerUser.route("wishlist/:id").put(wishlist);

export default routerUser;
