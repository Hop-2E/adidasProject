import express from "express";
import {
  getAllItems,
  createItem,
  deleteItem,
  uptadeItems,
  getItem,
} from "../controller/items.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
const router = express.Router();

router
  .route("/")
  .get(getAllItems)
  .post(checkTokenMiddleWare, checkRole, createItem)
  .delete(checkRole, deleteItem);
router.route("/:id").put(checkTokenMiddleWare, uptadeItems).get(getItem);
export default router;
