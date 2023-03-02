import express from "express";
import { getAllItems, createItem, deleteItem } from "../controller/items.js";
import { checkRole } from "../middleware/role.js";
const router = express.Router();

router
  .route("/")
  .get(getAllItems)
  .post(checkRole, createItem)
  .delete(deleteItem);
export default router;
