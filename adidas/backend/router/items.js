import express from "express";
import { getAllItems, createItem, deleteItem } from "../controller/items.js";
const router = express.Router();

router.route("/").get(getAllItems).post(createItem).delete(deleteItem);
export default router;
