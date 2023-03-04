import User from "../model/User.js";

export const checkRole = (req, res, next) => {
  try {
    const id = req.body.user_id;
    const admin = User.findById(id);
    if (admin.role === "admin") {
      next();
    } else {
      console.log("aldaa");
    }
  } catch (error) {}
};
