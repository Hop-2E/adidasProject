import express from "express";
import {
  getAllItems,
  createItem,
  deleteItem,
  uptadeItems,
} from "../controller/items.js";
import { checkTokenMiddleWare } from "../middleware/middleware.js";
import { checkRole } from "../middleware/role.js";
const router = express.Router();

router
  .route("/")
  .get(getAllItems)
  .post(checkRole, createItem)
  .delete(checkRole, deleteItem);
router.route("/:id").put(checkTokenMiddleWare, uptadeItems);
export default router;
